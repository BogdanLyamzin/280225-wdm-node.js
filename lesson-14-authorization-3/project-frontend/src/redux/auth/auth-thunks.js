import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerUserApi, loginUserApi, getCurrentApi, logoutUserApi } from "../../shared/api/auth-api";

export const register = createAsyncThunk(
    "auth/register",
    async(payload, {rejectWithValue})=> {
        try {
            const data = await registerUserApi(payload);
            return data;
        }
        catch(error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(payload, {rejectWithValue})=> {
        try {
            const data = await loginUserApi(payload);
            return data;
        }
        catch(error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const getCurrent = createAsyncThunk(
    "auth/current",
    async(token, {rejectWithValue})=> {
        try {
            const data = await getCurrentApi(token);
            return data;
        }
        catch(error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue})=> {
        try {
            await logoutUserApi();
            return true;
        }
        catch(error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)