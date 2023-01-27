import { Request, Response, NextFunction } from 'express';

interface RecipeInterface {
  search: (req: Request, res: Response, next: NextFunction) => void;
  get: (req: Request, res: Response, next: NextFunction) => void;
}

const recipeMiddleware: RecipeInterface = {
  search: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },
  get: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },
};

export default recipeMiddleware;
