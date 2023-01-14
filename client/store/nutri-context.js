import React, { createContext, useState } from 'react';

const NutriContext = createContext({
  allergy: '',
  updateAllergy: (newAllergy) => {},
  healthLabel: '',
  updateHealthLabel: (newHealthLabel) => {},
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
  isFavorite: false,
  updateIsFavorite: (newIsFavorite) => {},
  faveClicked: [],
  updateFaveClicked: (newFaveClicked) => {},
  healthLabelActive: false,
  updateSetHealthLabelActive: (newSetHealthLabelActive) => {},
});

export function NutriContextProvider(props) {
  const [allergy, setAllergy] = useState('');
  const [healthLabel, setHealthLabel] = useState('');
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [faveClicked, setfaveClicked] = useState([]);
  const [healthLabelActive, setHealthLabelActive] = useState(false);

  function updateAllergyHandler(newAllergy) {
    setAllergy(newAllergy);
  }

  function updateHealthLabelHandler(newHealthLabel) {
    setHealthLabel(newHealthLabel);
  }

  function updateRecipeDetailsHandler(newRecipeDetails) {
    setRecipeDetails(newRecipeDetails);
  }

  function updateIsFavoriteHandler(newIsFavorite) {
    setIsFavorite(newIsFavorite);
  }

  function updateFaveClickedHandler(newFaveClicked) {
    setfaveClicked(newFaveClicked);
  }

  function updateHealthLabelActiveHandler(newHealthLabelActive) {
    setHealthLabelActive(newHealthLabelActive);
  }

  const context = {
    allergy,
    updateAllergy: updateAllergyHandler,
    healthLabel,
    updateHealthLabel: updateHealthLabelHandler,
    recipeDetails,
    updateRecipeDetails: updateRecipeDetailsHandler,
    isFavorite,
    updateIsFavorite: updateIsFavoriteHandler,
    faveClicked,
    updateFaveClicked: updateFaveClickedHandler,
    healthLabelActive,
    updateSetHealthLabelActive: updateHealthLabelActiveHandler,
  };

  return (
    <NutriContext.Provider value={context}>
      {props.children}
    </NutriContext.Provider>
  );
}

export default NutriContext;
