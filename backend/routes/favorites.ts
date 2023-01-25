import { Router } from 'express';

const route = Router();

// TODO: add session validator route
route.get('/', (_, res) => {
  res.status(200).json(res.locals.user.data.favorites);
});

route.post('/', () => {});

route.patch('/', () => {});
route.delete('/', () => {});

export default route;
