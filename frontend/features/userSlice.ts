import { fridgeItem } from "./interfaces/fridgeItem";
import { Recipe } from "./interfaces/recipe"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { json } from "express";

interface UserState {
    userId: string | null;
    allergies: string[] | null; //is null necessary if an empty array (see initialState)? the concern is that there are no strings so it might throw type error
    fridgeInventory: fridgeItem[] | null; 
    favorites: Recipe[] | null; //need to change this on backend to match recipe interface, the idea is to not make another fetch call
}

const initialState: UserState = {
    userId: null,
    allergies: [],
    fridgeInventory: [],
    favorites: [],
}


export const getUserInfo = createAsyncThunk<Object>(
    "user/getUserInfo",
    async (userId, thunkAPI) => {
        const response = await fetch("http://localhost:8080/user/" + userId, {
            method: "GET",
        });
        const data = response.json();
        return data; // need to destructure this data to get what is needed for UserState
    }
)

export const addInventory = createAsyncThunk(
    "user/addInventory",
    async (fridgeItem, thunkAPI) => {
        const response = await fetch("http://localhost:8080/user/addInventory", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                fridgeItem
            })
        });
        const data = await response.json;
        return data;
    }
)

export const addFavorite = createAsyncThunk(
    "user/addInventory",
    async (favorite: string, thunkAPI) => {
        const response = await fetch("http://localhost:8080/user/addInventory", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                favorite
            })
        });
        const data = await response.json;
        return data;
    }
)

export const removeFavorite = createAsyncThunk(
    "user/addInventory",
    async (favorite: string, thunkAPI) => {
        const response = await fetch("http://localhost:8080/user/addInventory", {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                favorite
            })
        });
        const data = await response.json;
        return data;
    }
)