import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

/**
 * TODO: refactor createUser to handle avatar, allergies, fridgeInventory, favorites
 * TODO: add encryption for password
 */

const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log('made it to userController');

    console.log(req.body);

    const { username, password, name, email } = req.body;

    if (!username || !name || !email || !password) {
      console.log('error happened here');
      return next('error, please enter appropriate information');
    }

    console.log(username, name, email, password);

    try {
      const newUser = await User.create({
        username,
        name,
        avatar: 'hi',
        email,
        password,
        allerges: [],
        fridgeInventory: [],
        favorites: [],
      });

      res.locals.newUser = newUser;
      console.log('the following user was created', newUser);
      return next();
    } catch (err) {
      console.log('error occured in userController create user', err);
      next(err);
    }
  },

  verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log('made it to verifyUser');
    // console.log(req);
    const { username, password } = req.body;

    console.log({ username, password });
    if (!username || !password) {
      console.log('error happened here in verfiyUser controller');
      return next('error, please enter appropriate information');
    }

    console.log(username, password);

    try {
      const foundUser = await User.findOne({ username, password });

      res.locals.foundUser = foundUser;
      console.log('the following user was found', foundUser);

      return next();
    } catch (err) {
      console.log('error occured in userController create user', err);
      next(err);
    }
  },
};

export default userController;
