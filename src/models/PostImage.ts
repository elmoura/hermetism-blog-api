import { Schema } from 'mongoose';

const PostImageSchema = new Schema({
  image_id: {
    type: Schema.Types.ObjectId
  },
  url: {
    type: String
  },
  size: {
    type: Number
  }
});

export { PostImageSchema };