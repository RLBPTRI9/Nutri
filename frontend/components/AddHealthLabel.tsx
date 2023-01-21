import React, { useContext, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { toast } from 'react-toastify';
import NutriContext from '../store/nutri-context.js';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AddHealthLabel = () => {
  const healthLabels = [
    'alcohol-cocktail',
    'alcohol-free',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'dash',
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

  const nutriContext = useContext(NutriContext);
  const updateHealthLabel = nutriContext.updateHealthLabel;
  const updateSetHealthLabelActive = nutriContext.updateSetHealthLabelActive;

  const [inputValue, setInputValue] = React.useState('');
  const healthLabelRef: HTMLTextAreaElement =
    document.querySelector('#HealthLabel')!;

  const saveHealthLabel = (event: any) => {
    event.preventDefault();

    const healthLabel: string = inputValue;

    updateHealthLabel(healthLabel);
    localStorage.setItem('label', healthLabel);
    healthLabelRef.value = '';

    toast.success('Health label updated!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const clearHealthLabel = () => {
    localStorage.setItem('label', '');

    toast.info('Health Label cleared', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

    updateHealthLabel('');
    healthLabelRef.value = '';
  };

  const setByAllergy = () => {
    updateSetHealthLabelActive(false);
  };

  const setByHealthLabel = () => {
    updateSetHealthLabelActive(true);
  };

  return (
    <div>
      <Grid
        container
        component='form'
        spacing={1}
        direction='column'
        sx={{ ml: 4 }}>
        <Grid item sx={{ mb: 2 }}>
          <Typography variant='h5'>Allergy Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction='row' spacing={1}>
            <Chip label='By Allergy' onClick={setByAllergy} />
            <Chip
              label='By Health Label'
              variant='filled'
              color='success'
              onClick={setByHealthLabel}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            selectOnFocus
            size='small'
            options={healthLabels}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label='Health Label' id='HealthLabel' />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={saveHealthLabel}>
            Save
          </Button>
          <Button
            variant='outlined'
            size='small'
            onClick={clearHealthLabel}
            sx={{ ml: 1 }}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddHealthLabel;
