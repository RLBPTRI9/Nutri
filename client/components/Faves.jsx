import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NutriContext from '../store/nutri-context.js';
import { useContext, useState } from 'react';
import FavesCard from './RecipeCard.jsx';
import faves from '../static/faves2.png';

function Faves() {
  const nutriContext = useContext(NutriContext);
  const arrOfFavs = nutriContext.arrOfFavs;
  const favePics = nutriContext.favePics;

  return (
    <Card sx={{ maxWidth: 550 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='300'
        width='700'
        src={faves}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <a href={arrOfFavs}>{arrOfFavs}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Recipe</Button>
      </CardActions>
    </Card>
  );
}

export default Faves;