import { Request, Response } from 'express';
import { AppError } from '../../../shared/errors/AppError';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const {
      firstName,
      lastName,
      phone,
      interests
    } = request.body;

    const updatedUser = await this.updateUserUseCase.execute(_id, {
      firstName,
      lastName,
      phone,
      interests
    });

    if (!updatedUser) {
      const userNotFoundError = new AppError('Parece que esse usuário não existe', 400);
      return response.status(userNotFoundError.statusCode).json(userNotFoundError);
    }

    return response.json(updatedUser);
  }
}