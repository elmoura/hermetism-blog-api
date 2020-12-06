import { Post } from '../../../models/Post';

export class ListPostsUseCase {
  async execute(limit: number, offset: number, tags?: string) {

    if (tags && tags.length) {
      let tagsArray = tags.split(',');
      tagsArray = tagsArray.map(tag => tag.trim());

      return Post.find({ tags: { $in: tags } })
        .skip(offset)
        .limit(limit);
    }

    return Post.find()
      .skip(offset)
      .limit(limit);
  }
}