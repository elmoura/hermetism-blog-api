import { Bucket } from "@google-cloud/storage";
import { genSaltSync } from 'bcrypt';

import { IPostImage } from '../../../DTOs/IPostImage';
import { ICreatePostImagesDTO } from './CreatePostImagesDTO';
import { Post } from '../../../models/Post';

export class CreatePostImagesUseCase {
  constructor(
    private postImagesBucket: Bucket
  ) { }

  async execute(postId: string, files: ICreatePostImagesDTO[]): Promise<IPostImage[]> {
    const createdFilesArray = [];

    for (const file of files) {
      const createdFile = await this.uploadFile(postId, file);
      createdFilesArray.push(createdFile);
    }

    return createdFilesArray;
  }

  async uploadFile(postId: string, file: ICreatePostImagesDTO): Promise<IPostImage> {
    const fileKey = `${genSaltSync(10)}-${file.originalname}`

    const image = this.postImagesBucket.file(fileKey);
    const imageStream = image.createWriteStream();

    const createdFile = {
      url: `https://storage.cloud.google.com/blog-storage/${fileKey}`,
      key: fileKey,
      fileName: file.originalname,
      size: file.size,
    } as IPostImage;

    imageStream.on('error', (error) => { throw error });

    imageStream.on('finish',
      async () => Post.updateOne({ _id: postId }, { $push: { images: createdFile } })
    );

    imageStream.end(file.buffer);

    return createdFile;
  }
}