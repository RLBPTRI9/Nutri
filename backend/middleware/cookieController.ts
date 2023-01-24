
import {Request, Response, NextFunction} from 'express';
const cookieController: any = {};
// setting httpOnly cookie nature allows it to only be accessible by the server application
cookieController.setSSIDCookie = (req:Request, res:Response, next:NextFunction) => {
    // stores the user id in a cookie
    res.cookie("ssid", res.locals.id, { maxAge: 10 * 8640000, httpOnly: true });
    next();
};



export default cookieController;