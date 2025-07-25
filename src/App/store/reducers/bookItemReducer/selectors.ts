import type {RootState} from "../../store.ts";

export const getItemBookSelector = (state: RootState) => state.bookItem;