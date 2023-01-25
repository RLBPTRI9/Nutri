import { Schema, model } from 'mongoose';
import { User } from '../types/User';

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

UserSchema.methods.createJWT = function () {};

//TODO: add functionality with bcrypt and to encrpt password
// UserSchema.pre('save', function (err, user) {});

export default model<User>('User', UserSchema);
