import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

interface FavoriteIngredientInterface {
  get: (req: Request, res: Response, next: NextFunction) => void;
  add: (req: Request, res: Response, next: NextFunction) => void;
  update: (req: Request, res: Response, next: NextFunction) => void;
  remove: (req: Request, res: Response, next: NextFunction) => void;
}

const favoriteIngredientMiddleware: FavoriteIngredientInterface = {
  // setting httpOnly cookie nature allows it to only be accessible by the server application

  //TODO: refactor forEach method to handle recipe ids INSTEAD of ingedients

  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = res.locals.user.auth.username;
      const user = await User.findOne({ username });

      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught getFavorites middleware error',
          message: { error: `no user found within database ${username}` },
        });
      }

      //add new ingredients to favorites array

      res.locals.favorites = user.data.favorites;

      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteIngredientMiddleware.get: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  //TODO: refactor forEach method to handle recipe ids INSTEAD of ingedients

  add: async (req: Request, res: Response, next: NextFunction) => {
    //grab new favorite ingredients from req body
    const { newIngredients } = req.body;
    //newIngredients: ['Spinach', 'Chocolate']

    try {
      if (!newIngredients) {
        return next({
          log: 'Express error handler caught addNewFavorite middleware error',
          message: {
            error: `no new ingredients were added. Did you mean add something?`,
          },
        });
      }

      const username = res.locals.user.auth.username;
      const user = await User.findOne({ username });

      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught addNewFavorite middleware error',
          message: { error: `no user found within database ${username}` },
        });
      }

      //add new ingredients to favorites array
      for (const ingredient in newIngredients) {
        if (typeof ingredient !== 'string')
          return next({
            log: 'Express error handler caught addNewFavorite middleware error',
            message: { error: `new in ${username}` },
          });
      }

      user.data.favorites = [...user.data.favorites, ...newIngredients];

      res.locals.favorites = user.data.favorites;

      return next();
    } catch (err) {
      return next({
        log: `Express error handler caught unknown middleware error in favoriteIngredientMiddleware.add: ${err}`,
        status: 500,
        message: { error: 'An error occured' },
      });
    }
  },

  //TODO: refactor forEach method to handle recipe ids INSTEAD of ingedients

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

  //TODO: refactor forEach method to handle recipe ids INSTEAD of ingedients

  remove: async (req: Request, res: Response, next: NextFunction) => {
    //grab new favorite ingredients from req body
    const { remove } = req.body;
    //newIngredients: ['Spinach', 'Chocolate']

    try {
      if (!remove) {
        return next({
          log: 'Express error handler caught removeFavorite middleware error',
          message: {
            error: `missing item to remove. Please enter item and try again`,
          },
        });
      }

      const username = res.locals.user.username;
      const user = await User.findOne({ username });

      //handler if not able to find a user in the database
      if (!user) {
        return next({
          log: 'Express error handler caught removeFavorite middleware error',
          message: { error: `no user found within database ${username}` },
        });
      }

      //create a new array with all of the ingredients except the one expected to be removed.
      user.data.favorites = res.locals.user.data.favorites.filter(
        (ingredient: string) => ingredient !== remove
      );

      res.locals.favorites = user.data.favorites;
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

export default favoriteIngredientMiddleware;
