import React, { createContext, useState } from 'react';

const RecipeDetailsContext = createContext({
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
});

export function RecipeDetailsContextProvider(props) {
  const [recipeDetails, setRecipeDetails] = useState([]);

  function updateRecipeDetailsHandler(newRecipeDetails) {
    setRecipeDetails(newRecipeDetails);
  }

  const context = {
    recipeDetails,
    updateRecipeDetails: updateRecipeDetailsHandler,
  };

  return (
    <RecipeDetailsContext.Provider value={context}>
      {props.children}
    </RecipeDetailsContext.Provider>
  );
}

export default RecipeDetailsContext;
