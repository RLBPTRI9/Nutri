import React, { useContext, useState } from 'react';
import RecipeCard from './RecipeCard';
import NutriContext from '../store/nutri-context';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SetMealIcon from '@mui/icons-material/SetMeal';

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
    ingredients: [
      '16 ounces Pad Thai Rice Noodles',
      '1/2 cup Agave',
      '1/3 cup lime juice',
      '1/2 cup shoyu',
      '2 tablespoons Toasted sesame seed oil',
      '6 scallions–sliced',
      '2 cloves of garlic–minced',
      '1 teaspoon fresh ginger–minced',
      "1 packet baked tofu (I used the trader Joe\\\\'s brand)",
      '1 cup bean sprouts',
    ],
    source: 'Serious Eats',
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
    ingredients: [
      "2 Ounces pad thai sauce, such as Ayara's Pad Thai Sauce*",
      '1 Pound ground chicken',
      '8 shrimp, peeled, de-veined, and coarsely chopped',
      '4 Tablespoons shrimp paste with soya bean oil',
      '4 cloves garlic, minced',
      'Pinch of paprika',
      'Salt and pepper, to taste',
      '1 Tablespoon vegetable oil',
      '8 Hawaiian dinner rolls',
      'One ten ounce bag spinach',
      '1 carrot, finely shredded',
      '2 green onions, finely shredded',
      "2 Ounces peanut sauce, such as Ayara's Peanut Sauce*",
    ],
    source: 'Delish',
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
    ingredients: [
      '8 ounces pad Thai rice noodles',
      '1 tablespoon tamarind paste',
      '1 tablespoon fish sauce',
      '1 tablespoon lime juice',
      '1 tablespoon grated palm sugar or light brown sugar',
      'Pinch red pepper flakes',
      '3 tablespoons vegetable oil',
      '2 garlic cloves, minced',
      '2 scallions, thinly sliced, greens reserved for garnish',
      'One 1-inch piece ginger, peeled and minced',
      '1 cup broccoli florets',
      '8 ounces medium shrimp, peeled and deveined',
      '1 cup bean sprouts',
      '4 ounces pressed tofu, julienned',
      '2 eggs, beaten',
      'roasted peanuts',
      'cilantro leaves',
      'lime wedges',
    ],
    source: 'Delish',
  },
  {
    name: 'Pad Thai',
    image: 'https://cafedelites.com/wp-content/uploads/2018/07/pad-thai-6.jpg',
    healthLabels: 'nut-free, soy-free, gluten-free',
    url: 'https://cafedelites.com/pad-thai/',
    ingredients: [
      '5 ounces pad thai rice noodles',
      '3 tablespoons vegetable oil',
      '1 large egg, room temperature',
      '6 medium shrimp, peeled, deveined (optional)',
      "2 tablespoons 1x1/2x1/8' slices pressed tofu (bean curd)",
      "1 tablespoon sweet preserved shredded radish, rinsed, chopped into 1' pieces",
      '1 cup bean sprouts',
      '5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water',
      '5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water',
      '5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water',
      '1 1/2t tablespoons (or more) Thai fish sauce (nam pla)',
      '1 1/2t tablespoons simple syrup, preferably made with palm sugar',
      "4 garlic chives, 2 cut into 1' pieces",
      '1/2 teaspoons ground dried Thai chiles, divided',
      '2 tablespoons crushed roasted, unsalted peanuts, divided',
      '2 lime wedges',
    ],
    source: 'Bon Appetit',
  },
];

function RecipeCards() {
  const nutriContext = useContext(NutriContext);
  const recipeDetails = nutriContext.recipeDetails;
  const [favorite, setFavorite] = useState([]);

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
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {recipeCards}
      </Grid>
    </Box>
  );
}

export default RecipeCards;
