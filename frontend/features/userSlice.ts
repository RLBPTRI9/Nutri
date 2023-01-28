import { fridgeItem } from './interfaces/fridgeItem';

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
  status: string | null;
}

const initialState: UserState = {
  allergies: [],
  fridgeInventory: [],
  favorites: [],
  status: 'idle',
};

// Need to implement in components later: https://redux.js.org/tutorials/essentials/part-5-async-logic#dispatching-thunks-from-components
// See also: https://redux.js.org/tutorials/essentials/part-5-async-logic#displaying-loading-state for implementing when app loads AND user signs in.
export const getUserInfoAsync = createAsyncThunk<UserState>(
  'user/getUserInfoAsync',
  async () => {
    const response = await fetch('http://localhost:8080/api/auth/user/', {
      //route needs to be changed?
      method: 'GET',
    });
    const data = await response.json();
    return data.data; // need to destructure this data to get what is needed for UserState
  }
);

//should be called onCLick of a "Save" button on frontend
export const editInventoryAsync = createAsyncThunk<fridgeItem[] | string>(
  'user/editInventoryItemAsync',
  async (fridgeInventory): Promise<fridgeItem[] | string> => {
    try {
      const response = await fetch('http://localhost:8080/api/ingredients', {
        //route needs to be changed?
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fridgeInventory, //body needs to be changed? maybe not? im not sure?
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
export const addFavoriteAsync = createAsyncThunk(
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
export const removeFavoriteAsync = createAsyncThunk(
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

export const addAllergyAsync = createAsyncThunk(
  'user/addAllergyAsync',
  async (allergy: string) => {
    try {
      const response = await fetch('http://localhost:8080/user/addAllergy', {
        //route needs to be changed?
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          allergy, //body needs to be changed? maybe not? im not sure?
        }),
      });
      const data = await response.json(); // should return all of the allergies
      return data; //should return all of the allergies
    } catch (error) {
      return `${error}`;
    }
  }
);

export const removeAllergyAsync = createAsyncThunk(
  'user/removeAllergyAsync',
  async (allergy: string) => {
    try {
      const response = await fetch('http://localhost:8080/user/removeAllergy', {
        //route needs to be changed?
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          allergy, //body needs to be changed? maybe not? im not sure?
        }),
      });
      const data = await response.json(); // should return all of the allergies
      return data; // should return all of the allergies
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
  },
  extraReducers(builder) {
    builder
      //GET USER INFO EXTRA REDUCER
      .addCase(getUserInfoAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { allergies, fridgeInventory, favorites } = action.payload;
        state.allergies = allergies;
        state.fridgeInventory = fridgeInventory;
        state.favorites = favorites;
      })
      .addCase(getUserInfoAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      //ADD FAVORITE EXTRA REDUCER
      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        if (typeof payload === 'string') console.log('bad favorite, string');
        // @ts-ignore
        state.favorites?.push(action.payload);
      })
      //REMOVE FAVORITE EXTRA REDUCER
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        // const { id } = action.payload
        // // const newFavorites = state.favorites?.filter(fav => fav.id != id)
        // state.favorites = newFavorites
      })
      //EDIT INVENTORY ITEM EXTRA REDUCER
      .addCase(editInventoryAsync.fulfilled, (state, action) => {
        const newInventory = action.payload;
        state.fridgeInventory = newInventory;
      })
      // ADD ALLERGIES
      .addCase(addAllergyAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        if (typeof payload === 'string') console.log('bad allergy, string');
        // @ts-ignore
        state.allergies?.push(action.payload);
      })
      // REMOVE ALLERGIES
      .addCase(removeAllergyAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        if (typeof payload === 'string') console.log('bad favorite, string');
        // @ts-ignore because it being handled above
        state.allergies = payload;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
