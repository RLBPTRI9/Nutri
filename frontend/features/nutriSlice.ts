interface NutriState {


}


//Below is for reference purposes during transition from context to store
/*
import React, { createContext, useState } from 'react';

const NutriContext = createContext({
  allergy: '',
  updateAllergy: (newAllergy) => {},
  healthLabel: '',
  updateHealthLabel: (newHealthLabel) => {},
  recipeDetails: [],
  updateRecipeDetails: (newRecipeDetails) => {},
  faveClicked: [],
  updateFaveClicked: (newFaveClicked) => {},
  healthLabelActive: false,
  updateSetHealthLabelActive: (newSetHealthLabelActive) => {},
});

export function NutriContextProvider(props) {
  const [allergy, setAllergy] = useState('');
  const [healthLabel, setHealthLabel] = useState('');
  const [recipeDetails, setRecipeDetails] = useState([]);
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


*/