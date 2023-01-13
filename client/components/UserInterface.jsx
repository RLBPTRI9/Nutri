import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AddAllergyByTag from './AddHealthLabel';
import GetIngredients from './GetIngredients';
import RecipeCards from './RecipeCards';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function DividerStack() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        justify='center'
        alignItems='center'
        direction='column'
        sx={{ mt: 6, pb: 4 }}
      >
        <Grid item xs={12}>
          <Paper elevation={24} sx={{ p: 4 }}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={7}
            >
              <AddAllergyByTag />
              <GetIngredients />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <RecipeCards />
    </div>
  );
}
