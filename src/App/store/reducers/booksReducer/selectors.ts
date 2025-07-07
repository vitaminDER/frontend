import type {RootState} from "../../store.ts";

export const getBooksSelector = (state: RootState) => state.books.books;
export const getLoadingBooksSelector = (state: RootState) => state.books.loadingBooks;
