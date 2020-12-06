import { ListPostsController } from "./ListPostsController";
import { ListPostsUseCase } from "./ListPostsUseCase";

const listPostsUseCase = new ListPostsUseCase();
const listPostsController = new ListPostsController(listPostsUseCase);

export { listPostsUseCase, listPostsController };