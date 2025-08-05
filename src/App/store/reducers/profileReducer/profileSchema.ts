import {FetchStatus, Nullable} from "@/App/store/storeTypes.ts";

export interface Profile {
    id: string;
    login: string;
}

export interface ProfileSchema {
    profile: Profile;
    loadingProfile: FetchStatus;
    errorProfile: Nullable<string> | undefined;

}