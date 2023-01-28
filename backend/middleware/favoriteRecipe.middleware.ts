import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import { Recipe } from '../types/Recipe';
import { getRecipeById } from '../utils/getRecipeById';

interface FavoriteRecipeInterface {
  get: (req: Request, res: Response, next: NextFunction) => void;
  add: (req: Request, res: Response, next: NextFunction) => void;
  update: (req: Request, res: Response, next: NextFunction) => void;
  remove: (req: Request, res: Response, next: NextFunction) => void;
}

const favoriteRecipetMiddleware: FavoriteRecipeInterface = {
  // setting httpOnly cookie nature allows it to only be accessible by the server application

  get: async (req: Request, res: Response, next: NextFunction) => {
    console.log('hello world!');
    try {
      const user = res.locals.user;
      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught getFavorites middleware error',
          message: { error: `no user found within database ${user._id}` },
        });
      }
      //add new ingredients to favorites array

      const stupid: Recipe[] = user.data.favorites.map((fav: string) =>
        getRecipeById(fav)
      );

      console.log('this is mappedFavs', stupid);
      const dumb = await Promise.all(stupid);

      console.log({ stupid });
      res.locals.favorites = dumb;

      //res.locals.favorites = stupid;

      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteIngredientMiddleware.get: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  add: async (req: Request, res: Response, next: NextFunction) => {
    //grab new favorite recipe object from req body
    const { recipeId } = req.body;

    //handler if recipeId recipe is missing
    try {
      if (!recipeId) {
        return next({
          log: 'Express error handler caught addNewFavorite middleware error',
          message: {
            error: `no new ingredients were added. Did you mean add something?`,
          },
        });
      }

      //grab
      const user = res.locals.user;


      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught addNewFavorite middleware error',
          message: {
            error: `no user found within database ${user.auth.username}`,
          },
        });
      }

      console.log({recipeId, user});
      //convert to set
      const recipeSet = new Set(user.data.favorites);
      //add new ingredients to favorites array

      if (typeof recipeId !== 'string')
        return next({
          log: 'Express error handler caught addNewFavorite middleware error',
          message: {
            error: `sent a non recipe id. This is not a recipe id${recipeId}`,
          },
        });

      //then attempt to push new recipeId recipe object onto to Set
      if (!recipeSet.has(recipeId)) {
        recipeSet.add(recipeId);
      }

      user.data.favorites = [...recipeSet];
      //update user on database
      await User.findOneAndUpdate(
        { 'auth.username': user.auth.username },
        { 'data.favorites': user.data.favorites }
      );

      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteRecipetMiddleware.add: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  //TODO: refactor forEach method to handle recipe ids INSTEAD of ingredients

  update: async (req: Request, res: Response, next: NextFunction) => {
    //grab new favorite ingredients from req body
    const { update, to } = req.body;
    //newIngredients: ['Spinach', 'Chocolate']

    try {
      if (!update || !to) {
        return update === undefined
          ? next({
              log: 'Express error handler caught updateFavorite middleware error',
              message: {
                error: `missing update field`,
              },
            })
          : next({
              log: 'Express error handler caught updateFavorite middleware error',
              message: {
                error: `missing to field`,
              },
            });
      }

      const username = res.locals.user.username;
      const user = await User.findOne({ username });

      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught updateFavorite middleware error',
          message: { error: `no user found within database ${username}` },
        });
      }

      //update the favorite item by looping through the favorites array, finding the recipe to update and then replacing it

      user.data.favorites.forEach(
        (ingredient: string, i: number, array: Array<string>) => {
          if (ingredient === update) {
            array[i] = to;
          }
        }
      );

      res.locals.favorites = user.data.favorites;

      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteIngredientMiddleware.update: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  remove: async (req: Request, res: Response, next: NextFunction) => {
    //grab new favorite ingredients from req body
    const user = res.locals.user;
    const { remove } = req.body;
    // example: { remove: 'id' }
    try {
      if (!remove) {
        return next({
          log: 'Express error handler caught removeFavorite middleware error',
          message: {
            error: `missing item to remove. Please enter item and try again`,
          },
        });
      }
      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught removeFavorite middleware error',
          message: { error: `no user found within database ${user._id}` },
        });
      }
      //create a new array with all of the ingredients except the one expected to be removed.
      const filteredFavs: string[] = user.data.favorites.filter(
        (favId: string) => favId !== remove
      );
      await User.findOneAndUpdate(
        { 'auth.username': user.auth.username },
        { 'data.favorites': filteredFavs }
      );
      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteIngredientMiddleware.remove: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },
};

export default favoriteRecipetMiddleware;
