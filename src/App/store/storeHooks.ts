import type {TypedUseSelectorHook} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import type {AppStore, RootState} from "./store.ts";

export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
