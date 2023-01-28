import { Router } from 'express';
import favoriteRecipetMiddleware from '../../middleware/favoriteRecipe.middleware';
import sessionMiddleware from '../../middleware/session.middleware';
const router = Router();

router.get(
  '/',
  sessionMiddleware.verify,
  favoriteRecipetMiddleware.get,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.post(
  '/',
  sessionMiddleware.verify,
  favoriteRecipetMiddleware.add,
  favoriteRecipetMiddleware.get,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.patch(
  '/',
  sessionMiddleware.verify,
  favoriteRecipetMiddleware.update,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

router.delete(
  '/',
  sessionMiddleware.verify,
  favoriteRecipetMiddleware.remove,
  favoriteRecipetMiddleware.get,
  (req, res) => {
    //return favorites array on the found user
    res.status(200).json(res.locals.favorites);
  }
);

export default router;
