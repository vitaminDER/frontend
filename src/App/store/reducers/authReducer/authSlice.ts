import {createSlice, SliceCaseReducers,} from "@reduxjs/toolkit";
import {FetchStatus} from "@/App/store/storeTypes.ts";
import {fetchRegistration} from "@/App/store/reducers/authReducer/services/fetchRegistration.ts";
import {AuthSchema, UserRole} from "@/App/store/reducers/authReducer/authSchema.ts";
import {fetchAuth} from "@/App/store/reducers/authReducer/services/fetchAuth.ts";

const initialState: AuthSchema = {
    authData: {
        id: '',
        email: '',
        login: '',
        password: '',
        role: [UserRole.ADMIN],
        isAuth: false,
        isRegistered: false,
    },
    loadingAuth: FetchStatus.IDLE,
    errorAuth: null,
    loadingRegistered: FetchStatus.IDLE,
    errorRegistered: null,
};

export const authSlice = createSlice<AuthSchema, SliceCaseReducers<AuthSchema>>({
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
                state.loadingRegistered = FetchStatus.PENDING;
            })
            .addCase(fetchRegistration.fulfilled, (state, action) => {
                state.authData.isRegistered = action.payload.isRegistered;
                state.loadingRegistered = FetchStatus.SUCCESS;
            })
            .addCase(fetchRegistration.rejected, (state, action) => {
                state.errorRegistered = action.payload?.message?.toUpperCase()
                state.loadingRegistered = FetchStatus.REJECTED;
            });
    }
});


export const {setAuth} = authSlice.actions;
export const authSliceReducer = authSlice.reducer;