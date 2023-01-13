import React, { createContext, useState } from 'react';

const RecipeDetailsContext = createContext({
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
});

export function RecipeDetailsContextProvider(props) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [faveClicked, setfaveClicked] = useState([]);

  function updateRecipeDetailsHandler(newRecipeDetails) {
    setRecipeDetails(newRecipeDetails);
  }

  function updateFaveClickedHandler(newFaveClicked) {
    setfaveClicked(newFaveClicked);
  }

  const context = {
    recipeDetails,
    updateRecipeDetails: updateRecipeDetailsHandler,
    faveClicked,
    updateFaveClicked: updateFaveClickedHandler
  };

  return (
    <RecipeDetailsContext.Provider value={context}>
      {props.children}
    </RecipeDetailsContext.Provider>
  );
}

export default RecipeDetailsContext;
