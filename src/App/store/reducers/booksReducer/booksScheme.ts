import {FetchStatus, Nullable} from "@/App/store/storeTypes.ts";

export interface IBooks {
    id: string;
    title: string;
    author: string
    image: string;

}

export interface BooksScheme {
    books: IBooks[];
    loadingBooks: FetchStatus;
    errorBooks: Nullable<string>
}
