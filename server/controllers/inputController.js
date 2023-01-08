const { application } = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const inputController = {};

inputController.getIngredients = (req, res, next) => {
  //pad thai, pad+thai
  //const  = req.params.ingredient;

  //clean up user input - trim spaces + lower cases
  console.log(process.env.EDAMAM_RECIPE_API_ID);

  const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=pad+thai`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not 2xx response', { message: response });
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.locals.ingredientData = data;
      return next();
    })
    .catch((err) => {
      if (err) return next(console.log(err));
    });
};

// swapiController.getMoreCharacterData = (req, res, next) => {

//     // const characterID = req.params.id;
//     const {id} = req.params;

//     const url = `https://swapi.dev/api/people/${id}`;
//     const charId = req.params.id;
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Not 2xx response', ({message: response}));
//         }
//         response.json();
//       })
//       .then(json => {
//         res.locals.characterData = json;
//         return next();
//       })
//       .catch((err) => {
//         if (err) return next(createErr({
//           method: 'Get more character data',
//           type: 'fetching character data via swapi',
//           err,
//         }));
//       });

module.exports = inputController;
