import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
    if (allergy === '') console.log('invalid input');

    localStorage.setItem('allergy', allergy);
  };

  return (
    <div>
      <Grid container spacing={1} direction='column'>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAllergy;
