
import {Request, Response, NextFunction} from 'express';
const cookieController: any = {};

cookieController.setSSIDCookie = (req:Request, res:Response, next:NextFunction) => {
    res.cookie("ssid", res.locals.id, { maxAge: 10 * 8640000, httpOnly: true });
    next();
};



export default cookieController;