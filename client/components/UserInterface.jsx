import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AddAllergy from './AddAllergy';
import GetIngredients from './GetIngredients';
import RecipeCards from './RecipeCards';

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={3}
        sx={{ mt: 4 }}
      >
        <AddAllergy />
        <GetIngredients />
      </Stack>
      <RecipeCards />
    </div>
  );
}
