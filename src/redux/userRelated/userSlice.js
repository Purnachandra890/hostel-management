import { createSlice } from '@reduxjs/toolkit';

// Move localStorage access outside the initialState
const savedUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
    status: 'idle',
    userDetails: [],
    tempDetails: [],
    loading: false,
    currentUser: savedUser,
    currentRole: savedUser?.role || null,
    error: null,
    response: null,
    darkMode: true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequest: (state) => {
            state.status = 'loading';
            state.error = null;
            state.response = null;
        },
        underControl: (state) => {
            state.status = 'idle';
            state.response = null;
            state.error = null;
        },
        stuffAdded: (state, action) => {
            state.status = 'added';
            state.tempDetails = action.payload;
            state.error = null;
            state.response = null;
        },
        authSuccess: (state, action) => {
            const user = action.payload;
            state.status = 'success';
            state.currentUser = user;
            state.currentRole = user.role;
            localStorage.setItem('user', JSON.stringify(user));
            state.error = null;
            state.response = null;
        },
        authFailed: (state, action) => {
            state.status = 'failed';
            state.response = action.payload;
            state.error = null;
        },
        authError: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.response = null;
        },
        authLogout: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
            state.currentRole = null;
            state.status = 'idle';
            state.error = null;
            state.response = null;
            state.tempDetails = [];
        },
        doneSuccess: (state, action) => {
            state.userDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getDeleteSuccess: (state) => {
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.loading = false;
            state.response = action.payload;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.response = null;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    },
});

export const {
    authRequest,
    underControl,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getDeleteSuccess,
    getRequest,
    getFailed,
    getError,
    toggleDarkMode
} = userSlice.actions;

export const userReducer = userSlice.reducer;
