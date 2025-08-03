import {Outlet} from "react-router-dom";
import {LinearProgress} from "@mui/material";
import {JSX} from "react";
import {useAppSelector} from "@/App/store/storeHooks.ts";
import {getLoadingBooksSelector} from "@/App/store/reducers/booksReducer/selectors.ts";
import {getItemBookStatusSelector} from "@/App/store/reducers/bookItemReducer/selectors.ts";
import {FetchStatus} from "@/App/store/storeTypes.ts";
import {AppContentWrapper, LoaderContainer} from "@/App/styled.ts";
import {Nav} from "@/widgets/ui/Nav";

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
