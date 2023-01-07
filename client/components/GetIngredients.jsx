import React, { Component, useEffect, useState } from 'react';

function GetIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const ingredients = async () => {
      setLoading(true);
      await fetch('/api')
        .then((res) => res.json())
        .then((ingredients) => {
          setIngredients(ingredients);
        })
        .catch((err) => console.log('useEffect: getIngredients: ERROR: ', err));
      setLoading(false);
    };
    ingredients();
  }, []);
  return (
    <div>
      hi
      {/* //finish this */}
    </div>
  );
}

export default GetIngredients;
