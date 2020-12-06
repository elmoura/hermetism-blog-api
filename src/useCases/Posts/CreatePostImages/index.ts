import { storage } from '../../../database/googleCloudStorage';

import { CreatePostImagesController } from "./CreatePostImagesController";
import { CreatePostImagesUseCase } from "./CreatePostImagesUseCase";

const postImagesBucket = storage.bucket('blog-storage');

const createPostImagesUseCase = new CreatePostImagesUseCase(postImagesBucket);
const createPostImagesController = new CreatePostImagesController(createPostImagesUseCase);

export { createPostImagesUseCase, createPostImagesController };