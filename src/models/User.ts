import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
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
  interests: [{
    type: String
  }]
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
});

const User = model('User', UserSchema);

export { User }