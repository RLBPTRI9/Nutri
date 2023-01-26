import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import env from 'dotenv';

type Recipe = {
  name: string;
  image: string;
  url: string;
  ingredients: any;
  cautions: any;
  healthLabels: string[];
  source: string;
};

const inputController = {
  getSearchResults: (req: Request, res: Response, next: NextFunction) => {
    const { q } = req.query;
    // console.log('what is q' + q);
    fetch(`https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${q}`)
      .then(data => data.json())
      .then(data => {
      if (!data) {
        res.locals.recipeData = null;
      } else {
        const recipeData = data;
        // console.log(recipeData);
        res.locals.recipeData = recipeData;
        return next();
      }
    })
      .catch(err => {
      return next(err);
    })
  },

  getIngredients: (req: Request, res: Response, next: NextFunction) => {
    //pad thai, pad+thai
    //https://localhost:8080/api/getIngredients?allergy=peanut&dish=pad+thai

    const { allergy, dish } = req.query; // query = {allergy:"peanut",dish: "pad+thai"}

    console.log('this is inputController getIngredients', allergy, dish);
    // const { allergy, dish } = req.query;
    // console.log(req.query.dish, req.query.allergy)
    //clean up user input - trim spaces + lower cases

    // console.log(process.env.EDAMAM_RECIPE_API_ID);
    console.log('before fetch');
    const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID
      }&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${String(dish ?? '')
        .toLowerCase()
        .trim()}`;

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
        //[{recipe:{...}},{recipe:{...}}]
        // let counter = 0;
        // let totalRecipes = recipes.length;
        // let allergyCheck = false;
        let resultList: Recipe[] = [];

        //we will need allergy from front end or need to query database

        recipes.forEach((data: any) => {
          const recipe: any = data.recipe;
          // console.log(x);
          resultList.push({
            name: recipe.label,
            image: recipe.image,
            url: recipe.url,
            ingredients: recipe.ingredientLines,
            cautions: recipe.cautions,
            healthLabels: recipe.healthLabels,
            source: recipe.source,
          });
        });

        if (!allergy) {
          res.locals.without = resultList;
          return next();
        }
        //const allergy = 'peanut';

        //const allergies = localStorage.getItem('allergies');
        //console.log(allergies);

        //TODO: figure this out
        // TODO: wtf?
        //cleanup function for plurals
        function cleanUp(string: string) {
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
        let cleanedInput = cleanUp(`${allergy}`);
        const regex = new RegExp(cleanedInput + '?');

        const recipesWithAllergy = [];
        // const recipesWithoutAllergy = [];

        /*
      TODO: pull recipes that include items in user's inventory
      */

        // TODO: see if we can do this with edimam API rather than here.
        const withoutAllergy = [];
        for (let recipe of resultList) {
          let ingredients = recipe.ingredients;
          // console.log(ingredients);
          for (let ingredientU of ingredients) {
            // console.log('ingredient',ingredient)
            let ingredient = ingredientU.toLowerCase();
            if (
              ingredient.match(regex) //||
              // Can we just remove this? 👇
              // It does the same as the regex?
              // ingredient.match(allergy.toLowerCase().trim())
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
  },

  getHealthLabels: (req: Request, res: Response, next: NextFunction) => {
    const { label, dish } = req.query;
    const lowercaseLabel = `${label}`.toLowerCase();

    console.log(dish);

    const url = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_RECIPE_API_ID
      }&app_key=${process.env.EDAMAM_RECIPE_API_KEY}&q=${String(dish ?? '')
        .toLowerCase()
        .trim()}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Not 2xx response' + { message: response });
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

        let resultList: Recipe[] = [];

        //we will need allergy from front end or need to query database

        recipes.forEach((data: any) => {
          const recipe: any = data.recipe;
          // console.log(x);
          resultList.push({
            name: recipe.label,
            image: recipe.image,
            url: recipe.url,
            ingredients: recipe.ingredientLines,
            cautions: recipe.cautions,
            healthLabels: recipe.healthLabels,
            source: recipe.source,
          });
        });
        // let counter = 0;
        // let totalRecipes = recipes.length;
        // let allergyCheck = false;
        // let resultList = [];

        // //we will need allergy from front end or need to query database

        // recipes.forEach((ele) => {
        //   const x = {};
        //   x.name = ele.recipe.label;
        //   x.image = ele.recipe.image;
        //   x.url = ele.recipe.url;
        //   x.ingredients = ele.recipe.ingredientLines;
        //   x.cautions = ele.recipe.cautions;
        //   x.healthLabels = ele.recipe.healthLabels;
        //   //adding the source for front-end
        //   x.source = ele.recipe.source;
        //   // console.log(x);
        //   resultList.push(x);
        //   // console.log(resultList);
        // });

        if (!lowercaseLabel) {
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
            if (hLabel.match(lowercaseLabel)) {
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
  },
};

//res.locals.healthLabel
export default inputController;
