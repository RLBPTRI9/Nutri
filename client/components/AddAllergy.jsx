import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';

const AddAllergy = () => {
  const allergyRef = useRef();

  const saveAllergy = (event) => {
    event.preventDefault();

    const allergy = allergyRef.current.value;

    if (allergy === '') {
      toast.error('Invalid input', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      localStorage.setItem('allergy', allergy);

      toast.success('Allergy saved!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      allergyRef.current.value = '';
    }
  };

  const clearAllergy = () => {
    localStorage.setItem('allergy', '');

    toast.info('Allergy cleared', {
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
          <TextField
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            inputRef={allergyRef}
            sx={{ mb: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            size='small'
            type='submit'
            onClick={saveAllergy}
          >
            Save
          </Button>
          <Button
            variant='outlined'
            size='small'
            onClick={clearAllergy}
            sx={{ ml: 1 }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAllergy;
