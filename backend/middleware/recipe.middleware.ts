import { Request, Response, NextFunction } from 'express';
import { EdemamResponse } from '../../__tests__/utils/dummyData';
import renameKeys from '../utils/renameKeys';
import getID from '../utils/getID';
import fetch from 'node-fetch';
import axios from 'axios';
import { getRecipeById } from '../utils/getRecipeById';

interface RecipeInterface {
  search: (req: Request, res: Response, next: NextFunction) => void;
  get: (req: Request, res: Response, next: NextFunction) => void;
}

const recipeMiddleware: RecipeInterface = {
  search: async (req: Request, res: Response, next: NextFunction) => {
    const { q, id } = req.query;

    if (!q) return next();
    // console.log('what is q' + q);
    fetch(
      `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${q}`
    )
      .then((data) => data.json())
      .then((data: EdemamResponse) => {
        if (!data) {
          res.locals.recipeData = null;
        } else {
          const edamamRecipes = data.hits;

          // TODO: change recipe data to be same format as type

          // Convert edemam recipes to recipe type
          const recipes = edamamRecipes.map(({ recipe }) =>
            // This will rename the keys from edemam to the keys we use.
            renameKeys({ ...recipe, recipeId: getID(recipe.uri) }, [
              {
                from: 'uri',
                to: '',
              },
              {
                from: 'label',
                to: 'recipeName',
              },
              {
                from: 'url',
                to: 'sourceUrl',
              },
              {
                from: 'source',
                to: 'recipeSource',
              },
              {
                from: 'cautions',
                to: 'allergens',
              },
              {
                from: 'shareAs',
                to: 'edemamShareUrl',
              },
              {
                from: 'ingredientLines',
                to: 'instructions',
              },
            ])
          );

          res.locals.recipeData = recipes;
          return next();
        }
      })
      .catch((err) => {
        return next(err);
      });
  },

  get: async (req: Request, res: Response, next: NextFunction) => {
    const { q, id } = req.query;
    if (q) return next();
    const [response] = await Promise.all([getRecipeById(id!.toString())]);
    res.locals.recipeData = response;
    return next();
  },
};

export default recipeMiddleware;
