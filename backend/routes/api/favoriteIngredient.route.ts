import { Router } from 'express';
import favoriteIngredientMiddleware from '../../middleware/favoriteIngredient.middleware';
import sessionMiddleware from '../../middleware/session.middleware';
const router = Router();

router.get(
  '/favorites',
  sessionMiddleware.verify,
  favoriteIngredientMiddleware.get,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.post(
  '/favorites',
  sessionMiddleware.verify,
  favoriteIngredientMiddleware.add,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.patch(
  '/favorites',
  sessionMiddleware.verify,
  favoriteIngredientMiddleware.update,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.delete(
  '/favorites',
  sessionMiddleware.verify,
  favoriteIngredientMiddleware.remove,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

export default router;
