import React, { Component, useEffect, useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

function GetIngredients() {
  const [dish, dishOnChange] = useInput('');

  const checkAPI = () => {
    const body = {
      dish,
    };

    useEffect(() => {
      const ingredients = async () => {
        setLoading(true);
        await fetch('/api')
          .then((res) => res.json())
          .then((ingredients) => {
            setIngredients(ingredients);
          })
          .catch((err) =>
            console.log('useEffect: getIngredients: ERROR: ', err)
          );
        setLoading(false);
      };
      ingredients();
    }, []);
  };
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
      <button type="button" className="button" onClick={checkAPI}>
        Check Ingredients
      </button>
    </div>
  );
}

export default GetIngredients;
