import { CreateAuthorController } from './CreateAuthorController';
import { CreateAuthorUseCase } from './CreateAuthorUseCase';

const createAuthorUseCase = new CreateAuthorUseCase();
const createAuthorController = new CreateAuthorController(createAuthorUseCase);

export { createAuthorUseCase, createAuthorController };