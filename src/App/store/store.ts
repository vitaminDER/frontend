import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {booksSliceReducer} from "./reducers/booksReducer/booksSlice.ts";
import {testSliceReducer} from "./reducers/testReducer/testClice.ts";
import storage from 'redux-persist/lib/storage'
import type {PersistConfig} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
    key: 'testSlice',
    storage,
    whitelist: ['testSlice']
}

export const rootReducer = combineReducers({
    books: booksSliceReducer,
    test: testSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            [...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })]
    });
};
export const store = setupStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setupStore>;

