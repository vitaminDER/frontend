import {FetchStatus, Nullable} from "../../storeTypes.ts";

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

export interface AuthData {
    id: string;
    email: string;
    login: string;
    password: string;
    role: UserRole[];
    isAuth: boolean;
    isRegistration: boolean;
}

export interface AuthSchema {
    authData: AuthData;
    loadingAuth: FetchStatus;
    errorAuth: Nullable<string>
}