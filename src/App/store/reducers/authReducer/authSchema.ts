import {FetchStatus, Nullable} from "../../storeTypes.ts";

export interface AuthData {
    // login: string;
    // password: string;
    isAuth: boolean;
    isRegistration: boolean;
}

export interface AuthSchema {
    authData: AuthData;
    loadingAuth: FetchStatus;
    errorAuth: Nullable<string>
}