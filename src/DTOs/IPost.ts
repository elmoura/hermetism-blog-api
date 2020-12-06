import { IPostImage } from './IPostImage';

export interface IPost {
  authorId: string;
  url: string;
  title: string;
  subtitle: string;
  tags: string[];
  images: IPostImage[];
}