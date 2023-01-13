import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { toast } from 'react-toastify';
import RecipeDetailsContext from '../store/recipe-details-context.js';

const AddHealthLabel = () => {
  const healthLabels = [
    'alcohol-cocktail',
    'alcohol-free',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'DASH',
    'egg-free',
    'fish-free',
    'fodmap-free',
    'gluten-free',
    'immuno-supportive',
    'keto-friendly',
    'kidney-friendly',
    'kosher',
    'low-potassium',
    'low-sugar',
    'lupine-free',
    'mediterranean',
    'mollusk-free',
    'mustard-free',
    'no-oil-added',
    'paleo',
    'peanut-free',
    'pescatarian',
    'pork-free',
    'red-meat-free',
    'sesame-free',
    'shellfish-free',
    'soy-free',
    'sugar-conscious',
    'sulfite-free',
    'tree-nut-free',
    'vegan',
    'vegetarian',
    'wheat-free',
  ];

  const recipeDetailsContext = useContext(RecipeDetailsContext);
  const updateAddHealthLabel = recipeDetailsContext.updateAddHealthLabel;
  updateAddHealthLabel(true);

  const [inputValue, setInputValue] = React.useState('');

  const saveHealthLabel = (event) => {
    event.preventDefault();

    const healthLabel = inputValue;

    localStorage.setItem('label', healthLabel);

    toast.success('Health label updated!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <div>
      <Grid
        container
        component='form'
        spacing={1}
        direction='column'
        sx={{ ml: 1 }}
      >
        <Grid item sx={{ mb: 1 }}>
          <Typography variant='h5'>Enter Health Label</Typography>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            size='small'
            options={healthLabels}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label='Health Label' />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={saveHealthLabel}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddHealthLabel;
