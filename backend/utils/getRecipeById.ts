import axios from 'axios';
import { EdemamRecipie } from '../../__tests__/utils/dummyData';
import { Recipe } from '../types/Recipe';
import renameKeys from './renameKeys';

// @ts-ignore
export const getRecipeById = async (recipeId: string): Recipe => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&beta=false&app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}`
  );

  // @ts-ignore

  // console.log('this is renameKeys invocation',
  //   renameKeys(response.data.recipe, [
  //     {
  //       from: 'uri',
  //       to: null,
  //     },
  //     {
  //       from: 'source',
  //       to: 'sourceUrl',
  //     },
  //   ])
  // );

  return {
    recipeId,
    ...renameKeys(response.data.recipe, [
      {
        from: 'uri',
        to: null,
      },
      {
        from: 'label',
        to: 'recipeName',
      },
      {
        from: 'url',
        to: 'sourceURL',
      },
      {
        from: 'shareAs',
        to: null,
      },
      {
        from: 'cautions',
        to: 'allergens',
      },
      {
        from: 'ingredientLines',
        to: 'instructions',
      },
    ]),
  };
};
// https://api.edamam.com/api/recipes/v2/${id}?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}
