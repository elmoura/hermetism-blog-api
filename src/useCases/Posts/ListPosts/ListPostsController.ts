import { Request, Response } from 'express';

import { IPost } from '../../../DTOs/IPost';
import { ListPostsUseCase } from "./ListPostsUseCase";

export class ListPostsController {
  constructor(
    private listPostsUseCase: ListPostsUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { limit, offset, tags } = request.query;

    const posts = await this.listPostsUseCase.execute(
      Number(limit),
      Number(offset),
      tags ? String(tags) : undefined
    );

    return response.json(posts);
  }
}