const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController');
//controller

router.get('/getIngredients', inputController.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.without);
});

router.get('/getHealthLabels', inputController.getHealthLabels, (req, res) => {
  return res.status(200).json(res.locals.healthLabels);
});

router.post('/allergies', (req, res) => {
  res.status(200).json();
});

module.exports = router;
