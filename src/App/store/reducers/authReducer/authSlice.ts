import {createSlice,} from "@reduxjs/toolkit";
import type {AuthSchema,} from "./authSchema.ts";
import {FetchStatus} from "../../storeTypes.ts";
import {fetchAuth} from "./services/fetchAuth.ts";
import {fetchRegistration} from "./services/fetchRegistration.ts";
import {UserRole} from "./authSchema.ts";

const initialState: AuthSchema = {
    authData: {
        id: '',
        email: '',
        login: '',
        password: '',
        role: [UserRole.ADMIN],
        // role: ['user'],
        isAuth: false,
        isRegistered: false,
    },
    loadingAuth: FetchStatus.IDLE,
    errorAuth: null,
};

export const authSlice = createSlice<AuthSchema>({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state: AuthSchema, action) {
            state.authData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.loadingAuth = FetchStatus.PENDING;
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.authData.isAuth = action.payload.isAuth;
                state.loadingAuth = FetchStatus.SUCCESS;
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.errorAuth = action.payload?.message?.toUpperCase()
                state.loadingAuth = FetchStatus.REJECTED;
            });
        builder
            .addCase(fetchRegistration.pending, (state) => {
                state.loadingAuth = FetchStatus.PENDING;
            })
            .addCase(fetchRegistration.fulfilled, (state, action) => {
                state.authData.isRegistered = action.payload.isRegistered;
                state.loadingAuth = FetchStatus.SUCCESS;
            })
            .addCase(fetchRegistration.rejected, (state, action) => {
                state.errorAuth = action.payload?.message?.toUpperCase()
                state.loadingAuth = FetchStatus.REJECTED;
            });
    }
});


export const {setAuth} = authSlice.actions;
export const authSliceReducer = authSlice.reducer;