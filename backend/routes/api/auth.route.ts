import { Router } from 'express';
import authMiddleware from '../../middleware/auth.middleware';
import favoriteRecipetMiddleware from '../../middleware/favoriteRecipe.middleware';
import sessionMiddleware from '../../middleware/session.middleware';
import renameKeys from '../../utils/renameKeys';
const router = Router();

router.post(
  '/signup',
  authMiddleware.create,
  sessionMiddleware.create,
  (req, res) => {
    const {
      auth: { username, avatar, email, name },
      data: { favorites, fridgeInventory, allergies },
    } = res.locals.user;

    return res.status(200).json({
      auth: { username, avatar, email, name },
      data: { favorites, fridgeInventory, allergies },
    });
  }
);

router.post(
  '/login',
  authMiddleware.verify,
  sessionMiddleware.create,
  favoriteRecipetMiddleware.get,
  (req, res) => {
    const { auth, data } = res.locals.user;
    const removedPass = renameKeys(auth, [{ from: 'password', to: null }]);
    data.favorites = res.locals.favorites;

    return res.status(200).json({ auth: removedPass, data });
  }
);

router.get(
  '/user',
  sessionMiddleware.verify,
  favoriteRecipetMiddleware.get,
  (req, res) => {
    const { auth, data } = res.locals.user;
    const removedPass = renameKeys(auth, [{ from: 'password', to: null }]);
    data.favorites = res.locals.favorites;

    res.status(200).json({ auth: removedPass, data });
  }
);

router.post('/logout', (req, res) => {
  res.clearCookie('ssid');
  res.status(200).json('Logged out successfully');
});

export default router;
