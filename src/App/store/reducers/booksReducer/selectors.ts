import type { RootState } from "../../store.ts";

export const getBooks = (state: RootState) => state.books.books;
