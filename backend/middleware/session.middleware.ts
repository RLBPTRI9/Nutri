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
      _id,
      auth: { username },
    } = res.locals.user;
    if (!_id || !username)
      return next({
        log: 'Express error handler caught no user id in sessionMiddleware.create',
        status: 500,
        message: { error: 'No user found.' },
      });
    const token = jwt.sign(
      JSON.stringify({ userId: res.locals.user._id, ...res.locals.user.auth }),
      '1234',
      {
        // expiresIn: 10 * 7800000,
      }
    );
    res.cookie('SSID', token, {
      expires: new Date(Date.now() + 10 * 7800000),
      httpOnly: true,
    });
    res.locals.token = token;
    return next();
  },
  verify: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.cookies.SSID;
      if (!token)
        return next({
          log: 'Express error handler caught no user id in sessionMiddleware.verify',
          status: 403,
          message: { error: 'No session token found.' },
        });
      console.log(jwt.verify(token, '1234'));
      console.log(token);
      // @ts-ignore
      const user = jwt.verify(token, '1234');
      // @ts-ignore because stupid
      const fullUser = await UserModel.findById(user.userId);
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