import {ProfileSchema} from "@/App/store/reducers/profileReducer/profileSchema.ts";
import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {FetchStatus} from "@/App/store/storeTypes.ts";
import {fetchAuth} from "@/App/store/reducers/authReducer/services/fetchAuth.ts";
import {fetchProfile, ResponseProfile} from "@/App/store/reducers/profileReducer/services/fetchProfile.ts";

const initialState: ProfileSchema = {
    profile: {
        id: '',
        login: '',
    },
    loadingProfile: FetchStatus.IDLE,
    errorProfile: null,
};

export const profileSlice = createSlice<ProfileSchema, SliceCaseReducers<ProfileSchema>>({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loadingProfile = FetchStatus.PENDING;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<ResponseProfile>) => {
                state.profile = action.payload
                state.loadingProfile = FetchStatus.SUCCESS;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.errorProfile = action.payload?.message?.toUpperCase()
                state.loadingProfile = FetchStatus.REJECTED;
            });
    }
});

export const {} = profileSlice.actions;
export const profileSliceReducer = profileSlice.reducer

