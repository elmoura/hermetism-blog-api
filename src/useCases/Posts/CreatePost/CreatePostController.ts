import { Request, Response } from 'express';

import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  constructor(
    private createPostUseCase: CreatePostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      authorId,
      title,
      subtitle,
      content,
      tags,
    } = request.body;

    const createdPost = await this.createPostUseCase.execute({
      authorId,
      title,
      subtitle,
      content,
      tags,
    });

    return response.status(201).json(createdPost);
  }
}