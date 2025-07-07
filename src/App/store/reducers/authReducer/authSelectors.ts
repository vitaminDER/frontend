import type {RootState} from "../../store.ts";

export const getLogin = (state: RootState) => state.authPreference.login;
export const getPass = (state: RootState) => state.authPreference.login;