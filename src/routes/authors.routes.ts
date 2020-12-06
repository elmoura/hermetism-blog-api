import { Router } from 'express';

import { createAuthorController } from '../useCases/Authors/CreateAuthor';

const authorsRoutes = Router();

authorsRoutes.post('/',
  async (request, response) => createAuthorController.handle(request, response)
);

export { authorsRoutes };