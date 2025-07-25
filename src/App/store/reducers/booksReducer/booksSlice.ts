import {createSlice} from "@reduxjs/toolkit";
import type {BooksScheme, IBooks} from "./booksSheme.ts";
import {FetchStatus} from "../../storeTypes.ts";
import {fetchBooks} from "./services.ts";


const mockBooks: IBooks[] = [
    {
        id: '1',
        title: 'Воина и мир',
        description: 'О воине и мире'
    }, {
        id: '2',
        title: 'Хоббит',
        description: 'О путешествии Бильбо Бегинса'
    },
]

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
                // console.log(action.payload)
                // state.books = mockBooks;
                // state.loadingBooks = FetchStatus.SUCCESS;
            });
    },
});

export const booksSliceActions = booksSlice.actions;
export const booksSliceReducer = booksSlice.reducer;