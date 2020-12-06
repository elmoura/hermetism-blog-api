import { Request, Response } from 'express';

import { CreatePostImagesUseCase } from "./CreatePostImagesUseCase";
import { ICreatePostImagesDTO } from './CreatePostImagesDTO';

export class CreatePostImagesController {
  constructor(
    private createPostImagesUseCase: CreatePostImagesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { postId } = request.params;

    const files = request.files as ICreatePostImagesDTO[];

    const createdPostImages = await this.createPostImagesUseCase.execute(postId, files);

    return response.status(201).json(createdPostImages);
  }
}