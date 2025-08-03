import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import {booksSliceReducer} from "@/App/store/reducers/booksReducer/booksSlice.ts";
import {itemBookSliceReducer} from "@/App/store/reducers/bookItemReducer/bookSlice.ts";
import {reviewsSliceReducer} from "@/App/store/reducers/reviewsReducer/reviewsSlice.ts";
import {authSliceReducer} from "@/App/store/reducers/authReducer/authSlice.ts";
import {userPreferenceSliceReducer} from "@/App/store/reducers/userPreference/userPreferenceSlice.ts";


const persistConfig = {
    key: 'userPreference',
    storage,
    whitelist: ['userPreference']
}

export const rootReducer = combineReducers({
    books: booksSliceReducer,
    bookItem: itemBookSliceReducer,
    reviews: reviewsSliceReducer,
    authPreference: authSliceReducer,
    userPreference: userPreferenceSliceReducer,
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

