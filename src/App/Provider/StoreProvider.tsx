import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "../store/store.ts";

export const StoreProvider = ({children}) => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>
    </Provider>;
};
