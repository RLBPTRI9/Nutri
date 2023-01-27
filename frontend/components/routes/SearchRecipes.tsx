import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecipeReviewCard from '../RecipeCard';
// import axios from 'axios';

const SearchRecipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = (event: any) => {
    if (event.keyCode === 13) {
      setSearchQuery(event.target.value);
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      const responseData: any = await (
        await fetch(`/api/recipes/?q=${searchQuery}`)
      ).json();
      setRecipes(responseData.hits);
    };

    if (searchQuery) {
      getRecipes();
    }
  }, [searchQuery]);

  return (
    <div className='SearchRecipesPage'>
      Welcome to the global recipe search. Happy cooking!
      <div className='SearchBar'>
        <TextField
          id='outlined-basic'
          label='Search results for...'
          variant='outlined'
          fullWidth
          onKeyDown={handleSearchChange}
          margin='normal'
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
      <hr color='lightgrey' />
      <div className='SearchRecipesContainer'>
        {recipes.map((recipe: any) => (
          <div className='SearchFlexItem' key={recipe.recipe.label}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;
