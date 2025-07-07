import type {Nullable} from "../../storeTypes.ts";

export interface IAuthData {
    login: string;
    password: string
}

export interface AuthSchema {
    login: Nullable<string>;
    password: Nullable<string>
}