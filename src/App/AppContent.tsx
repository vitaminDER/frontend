import {Nav} from "../widgets/ui/Nav";
import {Outlet} from "react-router-dom";
import {AppContentWrapper, LoaderContainer} from "./styled.ts";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "./store/storeHooks.ts";
import {getLoadingBooksSelector} from "./store/reducers/booksReducer/selectors.ts";
import {FetchStatus} from "./store/storeTypes.ts";
import {JSX} from "react";
import {getItemBookStatusSelector} from "./store/reducers/bookItemReducer/selectors.ts";

export const AppContent = (): JSX.Element => {
    const loadingStatusBooks = useAppSelector(getLoadingBooksSelector);
    const loadingStatusItemBook = useAppSelector(getItemBookStatusSelector);

    const isLoading = loadingStatusBooks === FetchStatus.PENDING || loadingStatusItemBook === FetchStatus.PENDING;

    return (
        <AppContentWrapper>
            <Nav/>
            <LoaderContainer>{isLoading ? <LinearProgress/> : null}</LoaderContainer>
            <Outlet/>
        </AppContentWrapper>
    );
};
