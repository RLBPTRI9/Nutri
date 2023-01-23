import mongoose from 'mongoose';
import { Ingredient } from './Ingredients';

export type User = {
  // _id is here so we can access it elsewhere. It is marked optional so we don't overwrite it in tests.
  _id?: string | mongoose.Types.ObjectId;
  username: string;
  name: string;
  avatar: string;
  email: string;
  password: string;
  allergies: string[];
  fridgeInventory: Ingredient[];
  favorites: string[];
};
