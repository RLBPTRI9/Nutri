export interface Recipe {
  recipeId: string;
  sourceUrl: string;
  recipeName: string;
  image: string;
  recipeSource: string;
  edemamShareUrl: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  allergens: string[];
  instructions: string[];
  ingredients: string[];
  calories: number;
  totalTime: number;
  dishType: string[];
}
