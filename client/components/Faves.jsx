import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NutriContext from '../store/nutri-context.js';
import { useContext, useState } from 'react';
import FavesCard from './RecipeCard.jsx';

export default function Faves() {
  const nutriContext = useContext(NutriContext);
  const arrOfFavs = nutriContext.arrOfFavs;
  const faveCards = arrOfFavs.map((details, index) => (
    <Grid xs={2} sm={4} md={4} key={index}>
      <FavesCard key={index} props={details} />
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {faveCards}
      </Grid>
    </Box>
  );
}
