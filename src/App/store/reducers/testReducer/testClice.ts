import {createSlice} from "@reduxjs/toolkit";
import {fetchPost} from "./services.ts";

interface InterfaceInitialState {
    post: any[];
    loadingStatus: boolean;
}

const initialState: InterfaceInitialState = {
    post: [],
    loadingStatus: false,
};
const testSlice = createSlice<InterfaceInitialState>({
    name: "testSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.loadingStatus = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.loadingStatus = false;
            })
            .addCase(fetchPost.rejected, (state) => {
                state.loadingStatus = false;
            });
    },
});

export const testSliceReducer = testSlice.reducer;