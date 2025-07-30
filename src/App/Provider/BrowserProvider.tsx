import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATH} from "../../constants.ts";
import * as React from "react";
import {Suspense} from "react";
import {AppContent} from "../AppContent.tsx";
import {Profile} from "../../pages/Profile/Profile.tsx";
import {NotFound} from "../../pages/NotFound/ui/NotFound.tsx";
import {Main} from "../../pages/Main";
import {Books} from "../../pages/Books";
import {BookItem} from "../../widgets/ui/BookItem";
import {Registration} from "../../pages/Registration";
import {Auth} from "../../pages/Auth";
import {CircularProgress} from "@mui/material";

export const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH.BASE} element={<AppContent/>}>
                    <Route index path={PATH.BASE} element={<Main/>}/>
                    <Route index path={PATH.BOOKS} element={<Books/>}/>
                    <Route path={PATH.BOOKITEM} element={
                        <Suspense fallback={
                            <CircularProgress size="30px"/>}><BookItem/></Suspense>}></Route>
                    <Route path={PATH.AUTH} element={<Auth/>}/>
                    <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
