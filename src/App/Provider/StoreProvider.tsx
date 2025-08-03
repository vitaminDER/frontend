import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "@/App/store/store.ts";
import {ReactNode} from "react";

interface IProps {
    children: ReactNode;
}

export const StoreProvider = ({children}: IProps) => {

    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}><>{children}</>
        </PersistGate>
    </Provider>;
};
