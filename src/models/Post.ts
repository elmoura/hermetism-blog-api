import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: Array
  }
}, { timestamps: true });

const Post = model('Post', PostSchema);

export { Post };