import React from 'react';
import GetIngredients from './GetIngredients.jsx';
import AddAllergies from './AddAllergies.jsx';
import ResponsiveAppBar from './NavBar.jsx';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <AddAllergies />
      <GetIngredients />
    </div>
  );
}

export default App;
