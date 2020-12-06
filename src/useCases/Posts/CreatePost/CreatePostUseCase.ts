import { Types } from 'mongoose';
import { Post } from '../../../models/Post';
import { Author } from '../../../models/Author';

import { CreatePostDTO } from './CreatePostDTO';

import { AppError } from '../../../shared/errors/AppError';
import { slugify } from '../../../shared/helpers/slugify';

export class CreatePostUseCase {
  async execute(createPostPayload: CreatePostDTO) {
    const isAuthorIdValid = Types.ObjectId.isValid(createPostPayload.authorId);

    if (!isAuthorIdValid) {
      throw new AppError('O que você está tentando fazer hein?? Esse autor nem existe!');
    }

    const authorExists = await Author.findOne({ _id: createPostPayload.authorId });

    if (!authorExists) {
      throw new AppError('O que você está tentando fazer hein?? Esse autor nem existe!');
    }

    const friendlyPostUrl = slugify(createPostPayload.title);

    const postAlreadyExists = await Post.findOne({ url: friendlyPostUrl });

    if (postAlreadyExists) {
      throw new AppError('Puxa que pena! Esse nome é tão sensacional que alguém já pegou ele, sinto muito :(');
    }

    const post = new Post(createPostPayload);
    post.url = friendlyPostUrl;

    const createdPost = await post.save();

    return createdPost;
  }
}