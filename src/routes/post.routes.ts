import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from '../config/multer';

import { listPostsController } from '../useCases/Posts/ListPosts';
import { createPostController } from '../useCases/Posts/CreatePost';
import { createPostImagesController } from '../useCases/Posts/CreatePostImages';

import { paginationHandler } from '../shared/middlewares/paginationHandler';

const postRoutes = Router();

postRoutes.post('/',
  async (request, response) => createPostController.handle(request, response)
);

postRoutes.post('/:postId/images', multer(multerConfig).array('image', 10),
  async (request, response) => createPostImagesController.handle(request, response)
);

postRoutes.get('/', paginationHandler,
  async (request, response) => listPostsController.handle(request, response)
);

export { postRoutes };