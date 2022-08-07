import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from 'src/store';
import { getLocalData, setLocalData } from 'src/helpers/storage';

import AuthService from 'src/service/authService';
const user: UserProfile = getLocalData('user');

// Define the initial state
const initialState: AuthState = {
    user: user,
    error: null,
    isLoggedIn: !!user,
    isAdmin: user && user.isAdmin,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state: AuthState, action: PayloadAction<UserProfile>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            state.isAdmin = action.payload.isAdmin;
            setLocalData('user', action.payload);
        },
        loginFail: (
            state: AuthState,
            action: PayloadAction<string | undefined>
        ) => {
            state.isLoggedIn = false;
            state.user = null;
            if (action?.payload) state.error = action.payload;
        },
        logout: (state: AuthState) => {
            state.isLoggedIn = false;
            state.user = null;
            AuthService.logout().finally(()=> localStorage.removeItem('user'));
        },
    },
});

// actions
export const { loginSuccess, loginFail, logout } = authSlice.actions;

export const login = (loginRequest: ILoginFormInput) => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthService.login(loginRequest);
        dispatch(loginSuccess(response));
    } catch (err) {
        dispatch(loginFail(err.message));
    }
};

// selector
export const selectAuth = (state: RootState) => state.auth;

// reducer
export default authSlice.reducer;
