import type {BookItemScheme} from "./bookItemSheme.ts";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {FetchStatus} from "@/App/store/storeTypes.ts";
import {fetchItemBook} from "@/App/store/reducers/bookItemReducer/services/fetchItemBook.ts";
import {deleteItemBook} from "@/App/store/reducers/bookItemReducer/services/deleteItemBook.ts";


const initialState: BookItemScheme = {
    book: null,
    loadingBooks: FetchStatus.IDLE,
    errorBooks: null,
};

const bookItemSlice = createSlice<BookItemScheme, SliceCaseReducers<BookItemScheme>>({
    name: "bookItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemBook.pending, (state) => {
                state.loadingBooks = FetchStatus.PENDING;
            })
            .addCase(fetchItemBook.fulfilled, (state, action) => {
                state.book = action.payload;
                state.loadingBooks = FetchStatus.SUCCESS;
            })
            .addCase(fetchItemBook.rejected, (state, action) => {
                state.errorBooks = action.payload?.message
                state.loadingBooks = FetchStatus.REJECTED;
            });
        builder
            .addCase(deleteItemBook.pending, (state) => {
                state.loadingBooks = FetchStatus.PENDING;
            })
            .addCase(deleteItemBook.fulfilled, (state) => {
                state.book = null;
                state.loadingBooks = FetchStatus.SUCCESS;
            })
            .addCase(deleteItemBook.rejected, (state, action) => {
                state.errorBooks = action.payload?.message
                state.loadingBooks = FetchStatus.REJECTED;
            });
    },
});

export const itemBookSliceActions = bookItemSlice.actions;
export const itemBookSliceReducer = bookItemSlice.reducer;