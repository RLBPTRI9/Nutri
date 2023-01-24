import React from 'react';
import { Outlet } from 'react-router-dom';

const SearchRecipes = () => {
    return (
        <div>
        <p>Search recipes placeholder</p>
        <Outlet/>
          </div>
      );
}

export default SearchRecipes;
