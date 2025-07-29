import type {RootState} from "../../store.ts";

export const getAuth = (state: RootState) => state.authPreference.authData;
export const getIsRegistration = (state: RootState) => state.authPreference.authData.isRegistration;