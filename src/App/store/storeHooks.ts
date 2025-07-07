import type {TypedUseSelectorHook} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import type {AppStore, RootState} from "./store.ts";
import {store} from "./store.ts";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppStore>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
