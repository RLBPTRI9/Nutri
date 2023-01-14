import React, { createContext, useState } from 'react';

const NutriContext = createContext({
  allergy: '',
  updateAllergy: (newAllergy) => {},
  healthLabel: '',
  updateHealthLabel: (newHealthLabel) => {},
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
  arrOfFavs: [],
  updateArrOfFavs: (newArrOfFavs) => {},
  faveClicked: false,
  updateFaveClicked: (newFaveClicked) => {},
  healthLabelActive: false,
  updateSetHealthLabelActive: (newSetHealthLabelActive) => {},
});

export function NutriContextProvider(props) {
  const [allergy, setAllergy] = useState('');
  const [healthLabel, setHealthLabel] = useState('');
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [faveClicked, setfaveClicked] = useState(false);
  const [arrOfFavs, setArrOfFavs] = useState([]);
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

  function updateArrOfFavesHandler(newArrOfFavs) {
    setArrOfFavs(newArrOfFavs)
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
    arrOfFavs,
    updateArrOfFavs: updateArrOfFavesHandler,
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
