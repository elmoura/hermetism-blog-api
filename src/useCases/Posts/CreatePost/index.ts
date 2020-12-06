import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const createPostUseCase = new CreatePostUseCase();
const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };