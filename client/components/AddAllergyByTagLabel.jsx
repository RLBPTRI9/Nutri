import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { toast } from 'react-toastify';

const AddAllergyByTagLabel = () => {
  const allergyTagLabels = ['test1', 'test2'];
  const [inputValue, setInputValue] = React.useState('');

  const saveAllergyTagLabel = (event) => {
    event.preventDefault();

    const allergyTagLabel = inputValue;

    localStorage.setItem('label', allergyTagLabel);

    toast.success('Allergy tag updated!', {
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
          <Typography variant='h5'>Enter Allergy</Typography>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            size='small'
            options={allergyTagLabels}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label='Allergy Tag' />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={saveAllergyTagLabel}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAllergyByTagLabel;
