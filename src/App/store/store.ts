import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {booksSliceReducer} from "./reducers/booksReducer/booksSlice.ts";
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import {authSliceReducer} from "./reducers/authReducer/authSlice.ts";
import {itemBookSliceReducer} from "./reducers/bookItemReducer/bookSlice.ts";
import {reviewsSliceReducer} from "./reducers/reviewsReducer/reviewsSlice.ts";


const persistConfig = {
    key: 'authPreference',
    storage,
    whitelist: ['authPreference']
}

export const rootReducer = combineReducers({
    books: booksSliceReducer,
    bookItem: itemBookSliceReducer,
    reviews: reviewsSliceReducer,
    authPreference: authSliceReducer
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
export type RootState = ReturnType<typeof rootReducer>;
export const store = setupStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setupStore>;

