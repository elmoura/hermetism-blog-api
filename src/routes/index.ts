import { Router } from 'express';

import { postRoutes } from './post.routes';
import { usersRoutes } from './users.routes';
import { authorsRoutes } from './authors.routes';

const routes = Router();

routes.use('/posts', postRoutes);
routes.use('/users', usersRoutes);
routes.use('/authors', authorsRoutes);

export { routes };