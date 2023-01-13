import React, { createContext, useState } from 'react';

const RecipeDetailsContext = createContext({
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
  faveClicked: [],
  updateFaveClickedHandler: (newFaveClicked) => {},
  addHealthLabel: false,
  updateAddHealthLabel: (newAddHealthLabel) => {},
});

export function RecipeDetailsContextProvider(props) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [faveClicked, setfaveClicked] = useState([]);
  const [addHealthLabel, setAddHealthLabel] = useState(false);

  function updateRecipeDetailsHandler(newRecipeDetails) {
    setRecipeDetails(newRecipeDetails);
  }

  function updateFaveClickedHandler(newFaveClicked) {
    setfaveClicked(newFaveClicked);
  }

  function updateAddHealthLabelHandler(newAddHealthLabel) {
    setAddHealthLabel(newAddHealthLabel);
  }

  const context = {
    recipeDetails,
    updateRecipeDetails: updateRecipeDetailsHandler,
    faveClicked,
    updateFaveClicked: updateFaveClickedHandler,
    addHealthLabel,
    updateAddHealthLabel: updateAddHealthLabelHandler,
  };

  return (
    <RecipeDetailsContext.Provider value={context}>
      {props.children}
    </RecipeDetailsContext.Provider>
  );
}

export default RecipeDetailsContext;
