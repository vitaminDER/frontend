import {RootState} from "@/App/store/store.ts";

export const getItemBookSelector = (state: RootState) => state.bookItem;
export const getItemBookStatusSelector = (state: RootState) => state.bookItem.loadingBooks;