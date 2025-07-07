import {createSlice} from "@reduxjs/toolkit";
import type {BooksScheme} from "./booksSheme.ts";
import {FetchStatus} from "../../storeTypes.ts";
import {fetchBooks} from "./services.ts";

const initialState: BooksScheme = {
    books: [],
    loadingBooks: FetchStatus.IDLE,
    errorBooks: null,
};

const booksSlice = createSlice<BooksScheme>({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loadingBooks = FetchStatus.PENDING;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.books = action.payload;
                state.loadingBooks = FetchStatus.SUCCESS;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.errorBooks = action.payload?.message?.toUpperCase()
                state.loadingBooks = FetchStatus.REJECTED;
            });
    },
});

export const booksSliceActions = booksSlice.actions;
export const booksSliceReducer = booksSlice.reducer;