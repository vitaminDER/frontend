import {FetchStatus, Nullable} from "../../storeTypes.ts";


export interface Genre {
    id: string;
    name: string;

}

export interface BookItem {
    id: string;
    title: string;
    author: string;
    year: number;
    rating: number;
    description: string;
    genre: Genre[];
}

export interface BookItemScheme {
    book: Nullable<BookItem>;
    loadingBooks: FetchStatus;
    errorBooks: Nullable<string>
}