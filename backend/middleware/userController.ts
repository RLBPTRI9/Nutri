import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import { ObjectId } from 'mongoose';
import { Types } from 'mongoose';

/**
 * TODO: refactor createUser to handle avatar, allergies, fridgeInventory, favorites
 * TODO: add encryption for password
 */

const userController: any = {};


userController.createUser = async (req: Request, res: Response, next: NextFunction) => {
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
};

userController.verifyUser = async (req: Request, res: Response, next: NextFunction) => {
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

      //handler if not able to find a user in the database
      if (!foundUser) {
        return next({
          log: 'Express error handler caught verifyUser middleware error',
          message: { err: `no user found within database ${username}` },
        });
      }

   

      const userToken = foundUser.createJWT({ id: foundUser._id, username: foundUser.username });

      //add to res locals object: 1) JWT token for sessions and 2) user for updating favorites and fridge inventory
      res.locals.id = userToken;
      res.locals.foundUser = foundUser;

      return next();
    } catch (err) {
      console.log('error occured in userController verify user', err);
      next(err);
    }
  };

export default userController;
