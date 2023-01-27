import { Router } from 'express';
import recipeMiddleware from '../../middleware/recipe.middleware';
import sessionMiddleware from '../../middleware/session.middleware';
const router = Router();

router.get('/', sessionMiddleware.verify, recipeMiddleware.search, (req, res) =>
  res.status(200).json(res.locals.recipeData)
);

export default router;
