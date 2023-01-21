import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  allergies: { type: Array<String>(), default: [] },
  fridgeInventory: {
    type: Array<{ ingredient: string; amount: number; expires: Date }>(), // changed from itemName to ingredient to correspond to fridgeItem interface
    default: [],
  },
  favorites: { type: Array<String>(), default: [] },
});

UserSchema.pre('save', function (err, user) {});

export default model('User', UserSchema);
