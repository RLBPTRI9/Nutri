import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

const inventoryController: any = {};
// setting httpOnly cookie nature allows it to only be accessible by the server application

inventoryController.getFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = res.locals.user.username;
    const user = await User.findOne({ username });

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught getFavorites middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    //add new ingredients to favorites array

    res.locals.favorites = user.favorites;

    return next();
  } catch (err) {
    console.log('error occured in inventoryController addNewFavorite', err);
    next(err);
  }
};

inventoryController.addNewFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //grab new favorite ingredients from req body
  const { newIngredients } = req.body;
  //newIngredients: ['Spinach', 'Chocolate']

  try {
    if (!newIngredients) {
      return next({
        log: 'Express error handler caught addNewFavorite middleware error',
        message: {
          err: `no new ingredients were added. Did you mean add something?`,
        },
      });
    }

    const username = res.locals.user.username;
    const user = await User.findOne({ username });

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught addNewFavorite middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    //add new ingredients to favorites array
    user.favorites = [...user.favorites, ...newIngredients];

    res.locals.favorites = user.favorites;

    return next();
  } catch (err) {
    console.log('error occured in inventoryController addNewFavorite', err);
    next(err);
  }
};

inventoryController.updateFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //grab new favorite ingredients from req body
  const { update, to } = req.body;
  //newIngredients: ['Spinach', 'Chocolate']

  try {
    if (!update || !to) {
      return update === undefined
        ? next({
            log: 'Express error handler caught updateFavorite middleware error',
            message: {
              err: `missing update field`,
            },
          })
        : next({
            log: 'Express error handler caught updateFavorite middleware error',
            message: {
              err: `missing to field`,
            },
          });
    }

    const username = res.locals.user.username;
    const user = await User.findOne({ username });

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught updateFavorite middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    //update the favorite item by looping through the favorites array, finding the ingredient to update and then replacing it
    user.favorites.forEach(
      (ingredient: string, i: number, array: Array<string>) => {
        if (ingredient === update) {
          array[i] = to;
        }
      }
    );

    res.locals.favorites = user.favorites;

    return next();
  } catch (err) {
    console.log('error occured in inventoryController addNewFavorite', err);
    next(err);
  }
};

inventoryController.removeFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //grab new favorite ingredients from req body
  const { remove } = req.body;
  //newIngredients: ['Spinach', 'Chocolate']

  try {
    if (!remove) {
      return next({
        log: 'Express error handler caught removeFavorite middleware error',
        message: {
          err: `missing item to remove. Please enter item and try again`,
        },
      });
    }

    const username = res.locals.user.username;
    const user = await User.findOne({ username });

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught removeFavorite middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    //create a new array with all of the ingredients except the one expected to be removed.
    user.favorites = res.locals.foundUser.favorites.filter(
      (ingredient: string) => ingredient !== remove
    );

    res.locals.favorites = user.favorites;
    return next();
  } catch (err) {
    console.log('error occured in inventoryController addNewFavorite', err);
    next(err);
  }
};

export default inventoryController;
