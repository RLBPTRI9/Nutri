import React, { useState, useContext } from 'react';
import RecipeDetailsContext from '../store/recipe-details-context.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast, Flip } from 'react-toastify';

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
      <Grid container spacing={1} direction='column' sx={{ mr: 2 }}>
        <Grid item sx={{ mb: 1 }}>
          <Typography variant='h5'>Enter Dish</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            size='small'
            value={dish}
            onChange={dishOnChange}
            sx={{ mb: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={checkAPI}
          >
            View Recipes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default GetIngredients;
