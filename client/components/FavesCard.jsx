import * as React from 'react';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chevrolet from '../Images/Chevrolet.jpg';
import NutriContext from '../store/nutri-context.js';

export default function FavesCard({ props }) {
  const { url, image } = props;
  const nutriContext = useContext(NutriContext);
  const arrOfFavs = nutriContext.arrOfFavs;

  return (
    <div style={{ margin: '25%' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component='img' height='140' image='' alt='Chevrolet' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {arrOfFavs}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
