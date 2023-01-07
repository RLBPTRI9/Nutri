import React from 'react';
import GetIngredients from './GetIngredients.jsx';
import AddAllergies from './AddAllergies.jsx';
import '../stylesheets/styles.css';

function App() {
  return (
    <div>
      <AddAllergies />
      <GetIngredients />
    </div>
  );
}

export default App;
