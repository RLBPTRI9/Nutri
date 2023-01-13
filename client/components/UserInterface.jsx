import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AddAllergyByHealthLabel from './AddHealthLabel';
import AddAllergy from './AddAllergy';
import GetIngredients from './GetIngredients';
import RecipeCards from './RecipeCards';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NutriContext from '../store/nutri-context.js';

export default function DividerStack() {
  const nutriContext = React.useContext(NutriContext);
  const healthLabelActive = nutriContext.healthLabelActive;

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
          <Paper elevation={24} sx={{ p: 5 }}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={9}
            >
              {healthLabelActive && <AddAllergyByHealthLabel />}
              {!healthLabelActive && <AddAllergy />}
              <GetIngredients />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <RecipeCards />
    </div>
  );
}
