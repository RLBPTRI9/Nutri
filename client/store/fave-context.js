import React, { createContext, useState } from 'react';

const FaveContext = createContext({
  faveClicked: false,
  updateFaveClicked: (newFaveClicked) => {},
});

export function RecipeDetailsContextProvider(props) {
  const [faveClicked, setfaveClicked] = useState();

  function updateFaveClickedHandler(newFaveClicked) {
    setfaveClicked(newFaveClicked);
  }

  const context = {
    faveClicked,
    updateFaveClicked: updateFaveClickedHandler
  };

  return (
    <FaveContext.Provider value={context}>
      {props.children}
    </FaveContext.Provider>
  );
}

export default FaveContext;
