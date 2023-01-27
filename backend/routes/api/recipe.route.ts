import { Router } from 'express';
import recipeMiddleware from '../../middleware/recipe.middleware';
const router = Router();

router.get('/', recipeMiddleware.search, (req, res) =>
  res.status(200).json(res.locals.recipeData)
);

export default router;
