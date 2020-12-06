import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
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
  tags: {
    type: Array
  },
  images: [{
    image_id: Schema.Types.ObjectId,
    url: String,
    fileName: String,
    key: String,
    size: Number,
  }]
}, { timestamps: true });

const Post = model('Post', PostSchema);

export { Post, PostSchema };