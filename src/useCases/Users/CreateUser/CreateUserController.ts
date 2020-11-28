import { Request, Response } from 'express';

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      email,
      password,
      interests,
      phone,
    } = request.body;

    const user = await this.createUserUseCase.execute({
      firstName,
      lastName,
      email,
      password,
      interests,
      phone,
    });

    return response.status(201).json(user);
  }
}