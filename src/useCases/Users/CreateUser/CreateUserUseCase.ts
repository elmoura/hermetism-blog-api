import { MongoRepository } from 'typeorm';
import { hash } from 'bcrypt';

import { User } from '../../../entities/User';
import { BadRequestError } from '../../../shared/errors/BadRequestError';

import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: MongoRepository<User>
  ) { }

  async execute(userPayload: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findOne({ email: userPayload.email });

    if (userAlreadyExists) {
      throw new BadRequestError('Hmmm, parece que já existe um usuário com esse e-mail');
    }

    const hashedPassword = await hash(userPayload.password, 10);

    userPayload.password = hashedPassword;

    const user = this.userRepository.create(userPayload);

    await this.userRepository.save(user);

    delete user.password;

    return user;
  }
}