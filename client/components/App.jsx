import React from 'react';
import GetIngredients from './GetIngredients.jsx';
import AddAllergy from './AddAllergy.jsx';
import '../stylesheets/styles.css';
import ResponsiveAppBar from './NavBar.jsx';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <AddAllergy />
      <GetIngredients />
    </div>
  );
}

export default App;
