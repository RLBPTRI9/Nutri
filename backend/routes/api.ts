import { Router } from 'express';
import inventoryController from '../middleware/inventoryController';
import userController from '../middleware/userController';
import cookieController from '../middleware/cookieController';
import inputController from '../middleware/inputController';
import authController from '../middleware/authController';

const router = Router();

router.post('/signup', userController.createUser, (req, res) => {
  console.log('made a user');
  return res.status(200).json(res.locals.newUser);
});


router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
    console.log('found a user');
    return res.status(200).json(res.locals.foundUser);
  }
);

router.get(
  '/getIngredients',
  inputController.getIngredients,
  (req, res) => {
    return res.status(200).json(res.locals.without);
  }
);

router.get(
  '/getHealthLabels',
  inputController.getHealthLabels,
  (req, res) => {
    return res.status(200).json(res.locals.healthLabels);
  }
);

router.get('/getRecipes', inputController.default.getSearchResults, (req, res) => {
  return res.status(200).json(res.locals.recipeData);
})

router.post('/allergies', (req, res) => {
  res.status(200).json();
});

/**
 * favorites endpoint routes
 */

router.get('/favorites', authController.verifyJWT, inventoryController.getFavorites, (req, res) => {
  //return favorites array on the found user
  res.status(200).json(res.locals.favorites);
});

router.post('/favorites', authController.verifyJWT, inventoryController.addNewFavorite, (req, res) => {
  //return favorites array on the found user
  res.status(200).json(res.locals.favorites);
});

router.patch('/favorites', authController.verifyJWT,inventoryController.updateFavorite, (req, res) => {
  //return favorites array on the found user
  res.status(200).json(res.locals.favorites);
});

router.delete('/favorites', authController.verifyJWT,inventoryController.removeFavorite, (req, res) => {
  //return favorites array on the found user
  res.status(200).json(res.locals.favorites);
});

router.post('/logout', (req, res) => {
  res.clearCookie('ssid');
  res.status(200).json('Logged out successfully');
});

// router.post('/test', async (req, res) => {
//   try {
//     console.log('hello11111');
//     // const name = 'Matthew';
//     // const id = '22';
//     const { name, id } = req.body;
//     const test = await Student.create({
//       name,
//       id,
//     });
//     return res.status(200).json();
//   } catch (err) {
//     console.log('this is an error');
//     return res.status(400).json(`server error unable to post test to DB`);
//   }
// });

module.exports = router;
