import { User } from '../../../models/User';
import { AppError } from '../../../shared/errors/AppError';

import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  async execute(userPayload: CreateUserDTO) {
    const userAlreadyExists = await User.findOne({ email: userPayload.email });

    if (userAlreadyExists) {
      throw new AppError('Hmmm, parece que já existe um usuário com esse e-mail');
    }

    const user = new User(userPayload);

    const createdUser = await user.save();

    return createdUser;
  }
}