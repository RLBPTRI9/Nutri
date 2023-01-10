const { application } = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const inputController = {};

inputController.getIngredients = (req, res, next) => {
  //pad thai, pad+thai
  const { ingredient, allergy } = req.params;

  //clean up user input - trim spaces + lower cases

  console.log(process.env.EDAMAM_RECIPE_API_ID);

  const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=pad+thai`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not 2xx response', { message: response });
      }
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log(data.hits);
      const recipes = data.hits; //array of objects, each object containing

      // let counter = 0;
      // let totalRecipes = recipes.length;
      // let allergyCheck = false;
      let resultList = [];

      //we will need allergy from front end or need to query database

      recipes.forEach((ele) => {
        const x = {};
        x.name = ele.recipe.label;
        x.image = ele.recipe.image;
        x.url = ele.recipe.url;
        x.ingredients = ele.recipe.ingredientLines;
        x.cautions = ele.recipe.cautions;
        x.healthLabels = ele.recipe.healthLabels;
        // console.log(x);
        resultList.push(x);
        // console.log(resultList);
      });

      const allergy = 'peanut';

      //const allergies = localStorage.getItem('allergies');
      //console.log(allergies);

      const recipesWithAllergy = [];
      // const recipesWithoutAllergy = [];

      const withoutAllergy = [];
      for (let recipe of resultList) {
        let ingredients = recipe.ingredients;
        // console.log(ingredients);
        for (let ingredient of ingredients) {
          // console.log('ingredient',ingredient)
          if (ingredient.match(allergy)) {
            recipesWithAllergy.push(recipe.url);
            break;
          }
        }
      }
      for (let ele of resultList) {
        if (!recipesWithAllergy.includes(ele.url)) {
          withoutAllergy.push(ele);
        }
      }
      console.log(withoutAllergy);
      res.locals.without = withoutAllergy; //food recipes list not containing allergy sent back to front end

      // res.locals.totalRecipes = totalRecipes; //number of recipes searched
      // res.locals.recipesContainingAllergy = counter; //number of recipes searched that containin allergy
      return next();
    })
    .catch((err) => {
      if (err) return next(console.log(err));
    });
};

module.exports = inputController;
