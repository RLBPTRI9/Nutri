import { Router } from 'express';
import authMiddleware from '../middleware/auth.middleware';
import sessionMiddleware from '../middleware/session.middleware';
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
  authMiddleware.verifyUser,
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

router.post('/logout', (req, res) => {
  res.clearCookie('ssid');
  res.status(200).json('Logged out successfully');
});

export default router;
