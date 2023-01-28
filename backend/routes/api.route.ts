import { Router } from 'express';

import authRoute from './api/auth.route';
import favoriteIngredientRoute from './api/favoriteIngredient.route';
import fridgeInventoryRoute from './api/fridgeInventory.route';
import allergensRoute from './api/allergens.route';
import recipeRoute from './api/recipe.route';

const router = Router();

// Auth endpoint
router.use('/auth', authRoute);

// Favorite ingredient endpoint
router.use('/favorites', favoriteIngredientRoute);

// Fridge inventory endpoint
router.use('/inventory', fridgeInventoryRoute);

// Allergens endpoint
router.use('/allergens', allergensRoute);

// Recipe endpoint
router.use('/recipes', recipeRoute);

export default router;
