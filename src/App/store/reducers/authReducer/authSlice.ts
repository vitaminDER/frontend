import {createSlice,} from "@reduxjs/toolkit";
import type {AuthSchema,} from "./authSchema.ts";

const initialState: AuthSchema = {
    login: null,
    password: null,
};

export const authSlice = createSlice<AuthSchema>({
    name: "authPreference",
    initialState,
    reducers: {},
});


export const authSliceAction = authSlice.actions;
export const authSliceReducer = authSlice.reducer;