import { Request, Response, NextFunction } from 'express';

interface AllergensInterface {
  get: (req: Request, res: Response, next: NextFunction) => void;
  add: (req: Request, res: Response, next: NextFunction) => void;
  update: (req: Request, res: Response, next: NextFunction) => void;
  remove: (req: Request, res: Response, next: NextFunction) => void;
}

const allergensMiddleware: AllergensInterface = {
  get: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },

  add: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },

  update: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },

  remove: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },
};

export default allergensMiddleware;
