import React, { Component, useEffect, useState } from 'react';
import RecipeCards from './RecipeCards.jsx';

const testObj = [
  {
    name: 'Pad Thai',
    imgUrl:
      'https://www.gimmesomeoven.com/wp-content/uploads/2019/01/Pad-Thai-Recipe-1.jpg',
    recipeTags: 'soy-free, gluten-free',
    recipeUrl: 'https://tastesbetterfromscratch.com/pad-thai/',
    ingredients: 'peanuts, noodles',
  },
  {
    name: 'Pad Thai',
    imgUrl: 'https://cafedelites.com/wp-content/uploads/2018/07/pad-thai-6.jpg',
    recipeTags: 'nut-free, soy-free, gluten-free',
    recipeUrl: 'https://cafedelites.com/pad-thai/',
    ingredients: 'Spice, egg, noodles',
  },
];

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

function GetIngredients() {
  const [dish, dishOnChange] = useInput('');
  const [details, setDetails] = useState([]);

  // const checkAPI = () => {
  //   const body = {
  //     dish,
  //   };

  useEffect(() => {
    const ingredients = async () => {
      await fetch(`/api/getIngredients/${dish}`)
        .then((res) => res.json())
        .then((details) => {
          setDetails(details);
        })
        .catch((err) => console.log('useEffect: getIngredients: ERROR: ', err));
    };
    ingredients();
  }, []);
  // };

  const muiView = testObj.map((detail, index) => (
    <RecipeCards key={index} props={detail} />
  ));

  console.log(dish);

  return (
    <div>
      <label htmlFor="dish">Enter dish: </label>
      <br />
      <input
        name="dish"
        placeholder="Pad Thai"
        value={dish}
        onChange={dishOnChange}
      />
      <br />
      <button type="button" className="button" onClick={GetIngredients}>
        Check Ingredients
      </button>
      <br />
      <br />
      <br />
      {muiView}
    </div>
  );
}

export default GetIngredients;
