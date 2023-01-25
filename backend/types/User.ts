import mongoose from 'mongoose';
import { Ingredient } from './Ingredients';

export type User = {
  // _id is here so we can access it elsewhere. It is marked optional so we don't overwrite it in tests.
  _id?: string | mongoose.Types.ObjectId;
  auth: {
    username: string;
    name: string;
    avatar: string;
    email: string;
    password: string;
  };

  data: {
    allergies: string[];
    fridgeInventory: Ingredient[];
    favorites: string[];
  };
};
