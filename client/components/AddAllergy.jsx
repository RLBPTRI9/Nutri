import React, { useRef, useContext } from 'react';
import NutriContext from '../store/nutri-context.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import Chip from '@mui/material/Chip';

const AddAllergy = () => {
  const nutriContext = useContext(NutriContext);
  const updateAllergy = nutriContext.updateAllergy;
  const updateSetHealthLabelActive = nutriContext.updateSetHealthLabelActive;

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

      updateAllergy(allergy);
      allergyRef.current.value = '';
    }
  };

  const clearAllergy = () => {
    localStorage.setItem('allergy', '');

    toast.info('Allergy cleared', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

    updateAllergy('');
    allergyRef.current.value = '';
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
        sx={{ ml: 4 }}
      >
        <Grid item sx={{ mb: 2 }}>
          <Typography variant='h5'>Allergy Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <Chip label='By Allergy' onClick={setByAllergy} />
          <Chip
            label='By Health Label'
            variant='outlined'
            onClick={setByHealthLabel}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Allergy'
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            inputRef={allergyRef}
            sx={{ width: 250 }}
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
