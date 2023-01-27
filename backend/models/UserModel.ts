import { Schema, model } from 'mongoose';
import { User } from '../types/User';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  auth: {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    avatar: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  data: {
    allergies: { type: Array<String>(), default: new Array() },
    fridgeInventory: {
      type: Array<{ itemName: string; amount: number; expires: Date }>(),
      default: [],
    },
    favorites: { type: Array<String>(), default: new Array() },
  },
});

UserSchema.pre('save', function (next) {
  if (!this.auth) throw new Error('Unable to hash user password.');
  this.auth!.password = bcrypt.hashSync(this.auth!.password, 12);
  return next();
});

export default model<User>('User', UserSchema);
