import React, { useContext } from 'react';
import RecipeCard from './RecipeCard.jsx';
import RecipeDetailsContext from '../store/recipe-details-context.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const testObj = [
  {
    name: 'Pad Thai',
    image:
      'https://www.gimmesomeoven.com/wp-content/uploads/2019/01/Pad-Thai-Recipe-1.jpg',
    healthLabels: [
      'Pescatarian',
      'Dairy-Free',
      'Tree-Nut-Free',
      'Shellfish-Free',
      'Pork-Free',
      'Red-Meat-Free',
      'Celery-Free',
    ],
    url: 'https://tastesbetterfromscratch.com/pad-thai/',
    ingredients: 'peanuts, noodles',
  },
  {
    name: 'Pad Thai',
    image: 'https://cafedelites.com/wp-content/uploads/2018/07/pad-thai-6.jpg',
    healthLabels: [
      'Pescatarian',
      'Dairy-Free',
      'Gluten-Free',
      'Wheat-Free',
      'Tree-Nut-Free',
      'Pork-Free',
      'Red-Meat-Free',
      'Celery-Free',
      'Mustard-Free',
      'Sesame-Free',
      'Lupine-Free',
      'Alcohol-Free',
    ],
    url: 'https://cafedelites.com/pad-thai/',
    ingredients: 'Spice, egg, noodles',
  },
  {
    name: 'Vegan Pad Thai',
    image:
      'https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg',
    healthLabels: [
      'Vegan',
      'Vegetarian',
      'Pescatarian',
      'Dairy-Free',
      'Egg-Free',
      'Peanut-Free',
      'Tree-Nut-Free',
      'Fish-Free',
      'Shellfish-Free',
      'Pork-Free',
      'Red-Meat-Free',
      'Crustacean-Free',
    ],
    url: 'https://cafedelites.com/pad-thai/',
    ingredients: 'Spice, egg, noodles',
  },
  {
    name: 'Pad Thai',
    image: 'https://cafedelites.com/wp-content/uploads/2018/07/pad-thai-6.jpg',
    healthLabels: 'nut-free, soy-free, gluten-free',
    url: 'https://cafedelites.com/pad-thai/',
    ingredients: 'Spice, egg, noodles',
  },
];

function RecipeCards() {
  const recipeDetailsContext = useContext(RecipeDetailsContext);
  const recipeDetails = recipeDetailsContext.recipeDetails;

  const recipeCards = recipeDetails.map((details, index) => (
    <Grid xs={2} sm={4} md={4} key={index}>
      <RecipeCard key={index} props={details} />
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {recipeCards}
      </Grid>
    </Box>
  );
}

export default RecipeCards;
