import dummyEdemamData, {
  EdemamResponse,
} from '../../__tests__/utils/dummyData';

const getID = (incoming: EdemamResponse, recipeIndex: number): string => {
  const target = incoming.hits[recipeIndex];
  if (!target || !target.recipe) return '';
  return target.recipe.uri.split('recipe_')[1];
};
