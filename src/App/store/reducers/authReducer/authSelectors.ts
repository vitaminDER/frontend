import {RootState} from "@/App/store/store.ts";

export const getAuth = (state: RootState) => state.authPreference.authData;
export const getIsRegistration = (state: RootState) => state.authPreference.authData.isRegistered;