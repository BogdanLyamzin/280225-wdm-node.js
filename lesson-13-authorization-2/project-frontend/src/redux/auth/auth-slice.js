import {createSlice} from "@reduxjs/toolkit";

import { register, login, logout } from "./auth-thunks";

const initialState = {
    token: "",
    user: null,
    loading: false,
    error: null,
    isRegister: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(register.pending, (store)=> {
            store.loading = true;
            store.error = null;
        })
        .addCase(register.fulfilled, (store)=> {
            store.loading = false;
            store.isRegister = true;
        })
        .addCase(register.rejected, (store, {payload})=> {
            store.loading = false;
            store.error = payload;
        })
        .addCase(login.pending, (store)=> {
            store.loading = true;
            store.error = null;
        })
        .addCase(login.fulfilled, (store, {payload})=> {
            store.loading = false;
            store.token = payload.token;
            store.user = payload.user;
        })
        .addCase(login.rejected, (store, {payload})=> {
            store.loading = false;
            store.error = payload;
        })
        .addCase(logout.pending, (store)=> {
            store.loading = true;
            store.error = null;
        })
        .addCase(logout.fulfilled, ()=> initialState)
        .addCase(logout.rejected, (store, {payload})=> {
            store.loading = false;
            store.error = payload;
        })
    }
});

export default authSlice.reducer;