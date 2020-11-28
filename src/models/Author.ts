import { Schema, model } from 'mongoose';

import { hash } from 'bcrypt';

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  valueOfHour: {
    type: Number,
  },
  areas: [{
    type: String
  }],
});

AuthorSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
});

const Author = model('Author', AuthorSchema);

export { Author };