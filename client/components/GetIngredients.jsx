import React, { useContext, useRef } from 'react';
import RecipeDetailsContext from '../store/recipe-details-context.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast, Flip } from 'react-toastify';

function GetIngredients() {
  const recipeDetailsContext = useContext(RecipeDetailsContext);
  const updateRecipeDetails = recipeDetailsContext.updateRecipeDetails;
  const dishRef = useRef();

  const searchRecipes = (event) => {
    event.preventDefault();

    const dish = dishRef.current.value;

    if (dish === '') {
      toast.error('Invalid input', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      const toastID = toast.loading('Searching...', {
        position: toast.POSITION.TOP_CENTER,
      });

      fetch(
        `/api/getIngredients/?dish=${dish}&allergy=${localStorage.getItem(
          'allergy'
        )}`
      )
        .then((res) => res.json())
        .then((details) => {
          updateRecipeDetails(details);
        })
        .then(() => {
          setTimeout(() => {
            dishRef.current.value = '';

            toast.update(toastID, {
              render: 'Recipe search success!',
              type: 'success',
              isLoading: false,
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
              transition: Flip,
            });
          }, 500);
        })
        .catch((err) => {
          console.log('Error in checkAPI: ', err);
          setTimeout(() => {
            toast.update(toastID, {
              render: 'Something went wrong!',
              type: 'error',
              isLoading: false,
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
              transition: Flip,
            });
          }, 500);
        });
    }
  };

  return (
    <div>
      <Grid
        container
        component='form'
        spacing={1}
        direction='column'
        sx={{ mr: 2 }}
      >
        <Grid item sx={{ mb: 1 }}>
          <Typography variant='h5'>Enter Dish</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            size='small'
            inputRef={dishRef}
            sx={{ mb: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={searchRecipes}
          >
            View Recipes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default GetIngredients;
