import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATH} from "../../constants.ts";
import * as React from "react";
import {Suspense} from "react";
import {AppContent} from "../AppContent.tsx";
import {TestPage} from "../../pages/TestPage/TestPage.tsx";
import {NotFound} from "../../pages/NotFound/ui/NotFound.tsx";
import {Main} from "../../pages/Main";
import {Books} from "../../pages/Books";
import {BookItem} from "../../widgets/ui/BookItem";

export const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH.BASE} element={<AppContent/>}>
                    <Route index path={PATH.BASE} element={<Main/>}/>
                    <Route index path={PATH.BOOKS} element={<Books/>}/>
                    <Route path={PATH.BOOKITEM} element={
                        <Suspense fallback={
                            <div>Загрузка</div>}><BookItem/></Suspense>}></Route>
                    <Route path={PATH.TEST_PAGER} element={<TestPage/>}/>
                    <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
