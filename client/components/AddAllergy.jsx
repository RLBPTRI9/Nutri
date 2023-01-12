import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const AddAllergy = (props) => {
  const [allergy, allergyOnChange] = useInput('');

  const saveAllergy = () => {
    localStorage.setItem('allergy', allergy);

    if (allergy === '') {
      toast.error('Invalid input', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      toast.success('Allergy saved!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
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
      <Grid container spacing={1} direction='column' sx={{ ml: 1 }}>
        <Grid item sx={{ mb: 1 }}>
          <Typography variant='h5'>Enter Allergy</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            value={allergy}
            onChange={allergyOnChange}
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
            type='submit'
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
