import {Nav} from "../widgets/ui/Nav";
import {Outlet} from "react-router-dom";
import {AppContentWrapper, LoaderContainer} from "./styled.ts";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "./store/storeHooks.ts";
import {getLoadingBooksSelector} from "./store/reducers/booksReducer/selectors.ts";
import {FetchStatus} from "./store/storeTypes.ts";
import {JSX} from "react";

export const AppContent = (): JSX.Element => {
    const loadingStatus = useAppSelector(getLoadingBooksSelector);

    return (
        <AppContentWrapper>
            <Nav/>
            <LoaderContainer>{loadingStatus === FetchStatus.PENDING ? <LinearProgress/> : null}</LoaderContainer>
            <Outlet/>
        </AppContentWrapper>
    );
};
