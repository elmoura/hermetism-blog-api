import { Request, Response } from 'express';
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

export class CreateAuthorController {
  constructor(
    private createAuthorUseCase: CreateAuthorUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      whatsapp,
      email,
      password,
      bio,
      valueOfHour,
      areas
    } = request.body;

    const createdAuthor = await this.createAuthorUseCase.execute({
      firstName,
      lastName,
      whatsapp,
      email,
      password,
      bio,
      valueOfHour,
      areas
    });

    return response.status(201).json(createdAuthor);
  }
}