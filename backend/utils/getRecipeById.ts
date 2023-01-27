import axios from 'axios';
import { EdemamRecipie } from '../../__tests__/utils/dummyData';
import { Recipe } from '../types/Recipe';
import renameKeys from './renameKeys';

// @ts-ignore
export const getRecipeById = async (recipeId: string): Recipe => {
  const recipe: EdemamRecipie = await axios.get(
    `https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=${process.env.EDAMAM_RECIPE_API_ID}&app_key=${process.env.EDAMAM_RECIPE_API_KEY}`
  );

  // @ts-ignore
  return {
    recipeId,
    ...renameKeys(recipe, [
      {
        from: 'uri',
        to: '',
      },
      {
        from: 'source',
        to: 'sourceUrl',
      },
      {
        from: 'label',
        to: 'recipeName',
      },
      {
        from: 'url',
        to: '',
      },
      {
        from: 'shareAs',
        to: '',
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
