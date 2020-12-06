export interface PostImageDTO {
  imagePosition: number;
  imageUrl: string;
}

export interface CreatePostDTO {
  authorId: string;
  title: string;
  tags?: string;
  subtitle?: string;
  content: string;
  images?: PostImageDTO[];
}