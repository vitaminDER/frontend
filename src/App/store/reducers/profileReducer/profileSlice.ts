import {ProfileSchema} from "@/App/store/reducers/profileReducer/profileSchema.ts";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";

const initialState: ProfileSchema = {
    profile: '',
};

export const profileSlice = createSlice<ProfileSchema, SliceCaseReducers<ProfileSchema>>({
    name: 'profile',
    initialState,
    reducers: {},
});

export const {} = profileSlice.actions;
export const profileSliceReducer = profileSlice.reducer

