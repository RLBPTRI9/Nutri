import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface AuthState {
    username: string | null;
    name: string | null;
    avatar: string | null;
    email: string | null;
    isLoggedIn: boolean;
}

const user = JSON.parse(localStorage.getItem('user')!);
// post request async thunk for sign up that requires, username, name, avatar, email, and password
export const registerAsync = createAsyncThunk<Object>(
    "auth/registerAsync",
    async (userData, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    userData
                })
            });
            const data: Object = await response.json();
            return data
        } catch (error) {
            return `${error}`
        }
    }
)

export const loginAsync = createAsyncThunk<Object>(
    "auth/loginAsync",
    async(loginData) => {
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    loginData
                })
            })
        } catch (error) {
            return `${error}`
        }
    }
)

//post request async thunk for login that requires username (or email) and password, save their auth information in local storage and state, local storage would be catalyst for initial state
const initialState: AuthState = {
    username: user ? user.username :'',
    name: user ? user.name : '',
    avatar: user ? user.avatar : '',
    email: user ? user.email : '',
    isLoggedIn: user ? true : false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.username = ''
            state.name = ''
            state.avatar = ''
            state.email = ''
            state.isLoggedIn = false
        }
    },
    extraReducers(builder) {
        builder
        
        .addCase(registerAsync.pending, (state, action) => {

        })
        .addCase(registerAsync.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.isLoggedIn = true;
        })
        .addCase(registerAsync.rejected, (state, action) => {

        })
        .addCase(loginAsync.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(data))
            state.isLoggedIn = true;
        })
        
    }
})

// export default authSlice.reducer