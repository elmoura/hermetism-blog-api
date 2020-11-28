import { Author } from '../../../models/Author';
import { AppError } from '../../../shared/errors/AppError';

import { CreateAuthorDTO } from './CreateAuthorDTO';

export class CreateAuthorUseCase {
  async execute(createAuthorPayload: CreateAuthorDTO) {
    const authorAlreadyExists = await Author.findOne({ email: createAuthorPayload.email });

    if (authorAlreadyExists) {
      throw new AppError('Parece que já existe um autor com esse e-mail :(');
    }

    const author = new Author(createAuthorPayload);

    const createdAuthor = await author.save();

    delete createdAuthor.password;

    return createdAuthor;
  }
}