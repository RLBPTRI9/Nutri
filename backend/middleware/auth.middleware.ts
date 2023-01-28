import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/UserModel';

/**
 * TODO: refactor createUser to handle avatar, allergies, fridgeInventory, favorites
 * TODO: add encryption for password
 */

interface AuthInterface {
  create: (req: Request, res: Response, next: NextFunction) => void;
  verify: (req: Request, res: Response, next: NextFunction) => void;
}

const authMiddleware: AuthInterface = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, name, email, avatar } = req.body;

    if (!username || !name || !email || !password || !avatar)
      return next({
        log: 'Express error handler caught error in authMiddleware.create',
        status: 400,
        message: { error: 'Insufficient information. authMiddleware.create' },
      });

    try {
      const newUser = await User.create({
        auth: {
          username,
          name,
          avatar,
          email,
          password,
        },
        data: {
          allerges: [],
          fridgeInventory: [],
          favorites: [],
        },
      });

      res.locals.user = newUser;
      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in authMiddleware.create: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  verify: async (req: Request, res: Response, next: NextFunction) => {
    console.log('made it to verifyUser');
    // console.log(req);
    const { username, password } = req.body;

    if (!username || !password)
      return next({
        log: 'Express error handler caught error in authMiddleware.verify',
        status: 400,
        message: { error: 'Insufficient information.' },
      });

    try {
      const foundUser = await User.findOne({ username });
      //handler if not able to find a user in the database
      if (!foundUser)
        return next({
          log: 'Express error handler caught verifyUser middleware error',
          message: { error: `no user found within database ${username}` },
        });
      const isCorrectPass = bcrypt.compareSync(
        password,
        foundUser?.auth.password
      );
      if (!isCorrectPass)
        return next({
          log: `Express error handler caught middleware error in authMiddleware.create: Incorrect password`,
          status: 401,
          message: { error: 'Incorrect password' },
        });

      res.locals.user = foundUser;
      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in authMiddleware.create: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },
};

export default authMiddleware;
