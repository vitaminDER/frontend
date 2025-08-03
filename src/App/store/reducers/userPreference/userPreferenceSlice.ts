import {createSlice} from "@reduxjs/toolkit";
import {UserPreferenceScheme} from "@/App/store/reducers/userPreference/userPreferenceScheme.ts";

const initialState: UserPreferenceScheme = {
    preference: 'preference',
};

export const userPreferenceSlice = createSlice<UserPreferenceScheme>({
    name: "userPreference",
    initialState,
    reducers: {},
});

export const userPreferenceSliceReducer = userPreferenceSlice.reducer;