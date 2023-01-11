import React, { useContext } from 'react';
import RecipeCard from './RecipeCard.jsx';
import RecipeDetailsContext from '../store/recipe-details-context.js';

function RecipeCards() {
  const recipeDetailsContext = useContext(RecipeDetailsContext);
  const recipeDetails = recipeDetailsContext.recipeDetails;

  const recipeCards = recipeDetails.map((details, index) => (
    <RecipeCard key={index} props={details} />
  ));

  return <div>{recipeCards}</div>;
}

export default RecipeCards;
