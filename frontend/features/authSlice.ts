interface AuthState {
    username: string | null;
    name: string | null;
    avatar: string | null;
    email: string | null;
    isLoggedIn: boolean;
}


// post request async thunk for sign up that requires, username, name, avatar, email, and password

//post request async thunk for login that requires username (or email) and password, save their auth information in local storage and state, local storage would be catalyst for initial state




const initUser = JSON.parse(localStorage.getItem('user')!);
const initAuthState = {
    username: initUser.username ?? '',
    avatar: initUser.avatar ?? '',
    name: initUser.name ?? '',
    email: '',
}


// export default authSlice.reducer