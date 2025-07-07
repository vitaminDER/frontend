import {createSlice} from "@reduxjs/toolkit";
import type {BooksScheme} from "./booksSheme.ts";

const initialState: BooksScheme = {
    books: ["books"],
};
const booksSlice = createSlice<BooksScheme>({
    name: "booksSlice",
    initialState,
    reducers: {},
});

export const booksSliceActions = booksSlice.actions;
export const booksSliceReducer = booksSlice.reducer;