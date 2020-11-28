import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authorsRoutes } from './authors.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/authors', authorsRoutes);

export { routes };