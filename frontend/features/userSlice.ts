import { fridgeItem } from './interfaces/fridgeItem';
import { createAppAsyncThunk } from '../store/hooks';
import { loginAsync, registerAsync, ReturnedState } from './authSlice';

import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
  prepareAutoBatched,
} from '@reduxjs/toolkit';
import { json } from 'express';
import { Recipe } from './interfaces/recipe';

export interface UserState {
  allergies: string[] | string;
  fridgeInventory: fridgeItem[] | string;
  favorites: Recipe[]; //need to change this on backend to match recipe interface, the idea is to not make another fetch call
}

const initialState: UserState = {
  allergies: [],
  fridgeInventory: [],
  favorites: [],
};

// Need to implement in components later: https://redux.js.org/tutorials/essentials/part-5-async-logic#dispatching-thunks-from-components
// See also: https://redux.js.org/tutorials/essentials/part-5-async-logic#displaying-loading-state for implementing when app loads AND user signs in.

//should be called onCLick of a "Save" button on frontend
export const editInventoryAsync = createAppAsyncThunk<fridgeItem[] | string>(
  'user/editInventoryItemAsync',
  async (fridgeInventoryInput): Promise<fridgeItem[] | string> => {
    try {
      const response = await fetch('http://localhost:8080/api/ingredients', {
        //route needs to be changed?
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fridgeInventoryInput, //body needs to be changed? maybe not? im not sure?
        }),
      });
      const data: fridgeItem[] = await response.json(); // should return the entire inventory
      return data;
    } catch (error) {
      return `${error}`;
    }
  }
);

// Read the note on preparing action paylods with a unique ID: https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads
// Displaying a 'Loading' State from an API Call: https://redux.js.org/tutorials/essentials/part-5-async-logic#displaying-loading-state
export const addFavoriteAsync = createAppAsyncThunk(
  'user/addFavoriteAsync',
  async (favorite: string) => {
    try {
      const response = await fetch('http://localhost:8080/api/favorites', {
        //route needs to be changed?
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favorite, //body needs to be changed? maybe not? im not sure?
        }),
      });
      const data = await response.json(); //should return all of the favorites
      return data; //should return all of the favorites
    } catch (error) {
      return `${error}`;
    }
  }
);
export const removeFavoriteAsync = createAppAsyncThunk(
  'user/removeFavoriteAsync',
  async (favorite: string) => {
    try {
      const response = await fetch('http://localhost:8080/api/favorites', {
        //route needs to be changed?
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favorite, //body needs to be changed? maybe not? im not sure?
        }),
      });
      const data = await response.json(); // should return all of the favorites
      return data; // should return all of the favorites
    } catch (error) {
      return `${error}`;
    }
  }
);

// Read the note on preparing action paylods with a unique ID: https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads
//createSlice allows you to mutate the state in a way that is typically not allowed in Redux
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites?.push(action.payload);
    },
    setUserData: (state, action: PayloadAction<ReturnedState>) => {
      console.log();
    },
  },
  extraReducers(builder) {
    builder
      //GET USER INFO EXTRA REDUCER

      .addCase(registerAsync.fulfilled, (state, action) => {
        console.log('registerasyncpayload', action.payload);
        //@ts-ignore
        state.allergies = action.payload.data.allergies;
        state.favorites = action.payload.data.favorites;
        state.fridgeInventory = action.payload.data.fridgeInventory;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log('loginasyncpayload', action.payload);
        //@ts-ignore
        state.allergies = action.payload.data.allergies;
        state.favorites = action.payload.data.favorites;
        state.fridgeInventory = action.payload.data.fridgeInventory;
      })
      //ADD FAVORITE EXTRA REDUCER
      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        state.favorites = action.payload;
        // if (typeof payload === 'string') console.log('bad favorite, string')
      })
      //REMOVE FAVORITE EXTRA REDUCER
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      //EDIT INVENTORY ITEM EXTRA REDUCER
      .addCase(editInventoryAsync.fulfilled, (state, action) => {
        state.fridgeInventory = action.payload;
      });
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
