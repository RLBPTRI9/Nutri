const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController');
//controller

router.get('/searchIngredients', inputController.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.ingredientData);
});

router.post('/allergies', (req, res) => {
  res.status(200).json();
});

module.exports = router;
