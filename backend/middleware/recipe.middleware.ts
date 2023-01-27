import { Request, Response, NextFunction } from 'express';

interface RecipeInterface {
  search: (req: Request, res: Response, next: NextFunction) => void;
  get: (req: Request, res: Response, next: NextFunction) => void;
}

const recipeMiddleware: RecipeInterface = {
  search: (req: Request, res: Response, next: NextFunction) => {
    const { q } = req.query;
    // console.log('what is q' + q);
    fetch(
      `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${q}`
    )
      .then((data) => data.json())
      .then((data) => {
        if (!data) {
          res.locals.recipeData = null;
        } else {
          const recipeData = data;

          // TODO: change recipe data to be same format as type

          res.locals.recipeData = recipeData;
          return next();
        }
      })
      .catch((err) => {
        return next(err);
      });
  },

  get: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },
};

export default recipeMiddleware;
