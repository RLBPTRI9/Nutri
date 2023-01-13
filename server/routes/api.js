const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController');
//controller
const Student = require('../models/testModel');

router.get('/getIngredients', inputController.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.without);
});

router.get('/getHealthLabels', inputController.getHealthLabels, (req, res) => {
  return res.status(200).json(res.locals.healthLabels);
});

router.post('/allergies', (req, res) => {
  res.status(200).json();
});

router.post('/leaders', async (req, res) => {
  return res.status(200);
});

module.exports = router;
