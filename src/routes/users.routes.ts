import { Router } from 'express';

import { validateObjectId } from '../shared/middlewares/validateObjectId';

import { createUserController } from '../useCases/Users/CreateUser';
import { updateUserController } from '../useCases/Users/UpdateUser';

const usersRoutes = Router();

usersRoutes.post('/',
  async (request, response) => createUserController.handle(request, response)
);

usersRoutes.put('/:_id', validateObjectId,
  async (request, response) => updateUserController.handle(request, response)
);

export { usersRoutes };