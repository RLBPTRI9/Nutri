import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';

export type JWTInfo = {
  id: string;
  username: string;
};

interface SessionInterface {
  create: (req: Request, res: Response, next: NextFunction) => void;
  verify: (req: Request, res: Response, next: NextFunction) => void;
}

const sessionMiddleware: SessionInterface = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const {
      auth: { _id, username },
    } = res.locals.user;

    if (!_id || !username)
      return next({
        log: 'Express error handler caught no user id in sessionMiddleware.create',
        status: 500,
        message: { error: 'No user found.' },
      });

    const token = jwt.sign(res.locals.user.auth, process.env.JWT_SECRET_KEY!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME,
    });

    res.cookie('SSID', token, {
      expires: new Date(parseInt(process.env.JWT_TOKEN_EXPIRATION_TIME!, 10)),
      httpOnly: true,
    });
    res.locals.token = token;
    return next();
  },

  verify: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.cookies.ssid;
      if (!token)
        return next({
          log: 'Express error handler caught no user id in sessionMiddleware.verify',
          status: 403,
          message: { error: 'No session token found.' },
        });

      const user = jwt.verify(token, process.env.JWT_SECRET_KEY!);

      // @ts-ignore because stupid
      const fullUser = await UserModel.findById(user.auth._id);

      if (user === null)
        return next({
          log: 'Express error handler caught no user id in sessionMiddleware.verify',
          status: 403,
          message: { error: 'No user found.' },
        });

      res.locals.user = fullUser;
      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught no user id in sessionMiddleware.verify: ${err}`,
        status: 500,
        message: { error: 'An error occured.' },
      });
    }
  },
};

export default sessionMiddleware;
