import { Router } from 'express';
const router = Router();
const inputController = require('../middleware/inputController');
const userController = require('../middleware/userController');



router.post('/',userController.default.createUser, (req,res) => {
  console.log('made a user');
  return res.status(200).json(res.locals.newUser);

});

router.get('/getIngredients', inputController.default.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.without);
});

router.get('/getHealthLabels', inputController.default.getHealthLabels, (req, res) => {
  return res.status(200).json(res.locals.healthLabels);
});

router.get('/getRecipes', inputController.default.getSearchResults, (req, res) => {
  return res.status(200).json(res.locals.recipeData);
})

router.post('/allergies', (req, res) => {
  res.status(200).json();
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
