const { application } = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const inputController = {};

inputController.getIngredients = (req, res, next) => {
  //pad thai, pad+thai
  //https://localhost:8080/api/getIngredients?allergy=peanut&dish=pad+thai

  const query = req.query; // query = {allery:"peanut",dish: "pad+thai"}
  const allergy = query.allergy;
  //lowercase the dish
  const dish = query.dish.toLowerCase().trim();
  console.log(dish);

  console.log(allergy, dish);
  // const { allergy, dish } = req.query;
  // console.log(req.query.dish, req.query.allergy)
  //clean up user input - trim spaces + lower cases

  // console.log(process.env.EDAMAM_RECIPE_API_ID);

  const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${dish}`;

  fetch(url)
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error('Not 2xx response', { message: response });
      // }
      console.log('fetching API with ingredients');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.hits);
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
        //adding the source for front-end
        x.source = ele.recipe.source;
        // console.log(x);
        resultList.push(x);
        // console.log(resultList);
      });

      if (!allergy) {
        res.locals.without = resultList;
        return next();
      }
      //const allergy = 'peanut';

      //const allergies = localStorage.getItem('allergies');
      //console.log(allergies);

      //cleanup function for plurals
      function cleanUp(string) {
        let result;
        let input = string.toLowerCase().trim();
        console.log(input);
        let inputLength = input.length;
        console.log(inputLength);
        console.log(input.substring(inputLength - 2));
        console.log(input.substring(inputLength - 4, inputLength - 2));
        if (
          input.substring(inputLength - 2) === 'es' &&
          (input.substring(inputLength - 3, inputLength - 2) === 'z' ||
            input.substring(inputLength - 3, inputLength - 2) === 'o' ||
            input.substring(inputLength - 3, inputLength - 2) === 's' ||
            input.substring(inputLength - 3, inputLength - 2) === 'x' ||
            input.substring(inputLength - 4, inputLength - 2) === 'sh' ||
            input.substring(inputLength - 4, inputLength - 2) === 'ch')
        ) {
          result = input.substring(0, inputLength - 2);
          console.log(result);
        } else if (
          input.substring(inputLength - 2) === 'es' &&
          input.substring(inputLength - 3, inputLength - 2) === 'i'
        ) {
          result = input.substring(0, inputLength - 3) + 'y';
          console.log(result);
        } else {
          result = input;
        }
        return result;
      }
      let cleanedInput = cleanUp(allergy);
      const regex = new RegExp(cleanedInput + '?');

      const recipesWithAllergy = [];
      // const recipesWithoutAllergy = [];

      const withoutAllergy = [];
      for (let recipe of resultList) {
        let ingredients = recipe.ingredients;
        // console.log(ingredients);
        for (let ingredientU of ingredients) {
          // console.log('ingredient',ingredient)
          let ingredient = ingredientU.toLowerCase();
          if (
            ingredient.match(regex) ||
            ingredient.match(allergy.toLowerCase().trim())
          ) {
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

inputController.getHealthLabels = (req, res, next) => {
  const query = req.query;
  const label = query.label.toLowerCase();

  //lowercase the dish
  const dish = query.dish.toLowerCase().trim();
  console.log(dish);

  const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${dish}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not 2xx response', { message: response });
      }
      console.log('fetching API with healthLable');
      console.log('label', label);
      console.log('dish', dish);
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
        //adding the source for front-end
        x.source = ele.recipe.source;
        // console.log(x);
        resultList.push(x);
        // console.log(resultList);
      });

      if (!label) {
        res.locals.healthLabels = resultList;
        return next();
      }

      const recipesWithHealthLabel = [];
      const withoutHealthLabel = [];

      for (let recipe of resultList) {
        let hLabels = recipe.healthLabels;
        // console.log(ingredients);
        for (let hLabelUpper of hLabels) {
          let hLabel = hLabelUpper.toLowerCase();
          //console.log('hLabel lowerCased',hLabel);
          if (hLabel.match(label)) {
            recipesWithHealthLabel.push(recipe);
            break;
          }
        }
      }

      // for (let ele of resultList) {
      //   if (!recipesWithAllergy.includes(ele.url)) {
      //     withoutAllergy.push(ele);
      //   }
      //}
      // console.log(withoutAllergy);
      res.locals.healthLabels = recipesWithHealthLabel; //food recipes list not containing allergy sent back to front end

      // res.locals.totalRecipes = totalRecipes; //number of recipes searched
      // res.locals.recipesContainingAllergy = counter; //number of recipes searched that containin allergy
      return next();
    })
    .catch((err) => {
      if (err) return next(console.log(err));
    });
};

//res.locals.healthLabels
module.exports = inputController;
