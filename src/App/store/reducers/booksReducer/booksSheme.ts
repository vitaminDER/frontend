import {FetchStatus, Nullable} from "../../storeTypes.ts";

export interface IBooks {
    id: string;
    title: string;
    author: string

}

export interface BooksScheme {
    books: IBooks[];
    loadingBooks: FetchStatus;
    errorBooks: Nullable<string>
}
