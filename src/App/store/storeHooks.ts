import type {TypedUseSelectorHook} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {AppStore, RootState, store} from "@/App/store/store.ts";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppStore>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
