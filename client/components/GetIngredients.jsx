import React, { useEffect, useState, useContext } from 'react';
import RecipeDetailsContext from '../store/recipe-details-context.js';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

function GetIngredients() {
  const [dish, dishOnChange] = useInput('');
  const recipeDetailsContext = useContext(RecipeDetailsContext);
  const updateRecipeDetails = recipeDetailsContext.updateRecipeDetails;

  const checkAPI = () => {
    fetch(
      `/api/getIngredients/?dish=${dish}&allergy=${localStorage.getItem(
        'allergy'
      )}`
    )
      .then((res) => res.json())
      .then((details) => {
        console.log(details);
        console.log(dish);
        updateRecipeDetails(details);
      })
      .catch((err) => console.log('useEffect: getIngredients: ERROR: ', err));
  };

  return (
    <div>
      <label htmlFor='dish'>Enter dish: </label>
      <br />
      <input
        name='dish'
        placeholder='Pad Thai'
        value={dish}
        onChange={dishOnChange}
      />
      <br />
      <button type='button' className='button' onClick={checkAPI}>
        Check Ingredients
      </button>
      <br />
      <br />
    </div>
  );
}

export default GetIngredients;
