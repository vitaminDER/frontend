import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATH} from "../../constants.ts";
import {Books} from "../../pages/Books/ui";
import * as React from "react";
import {AppContent} from "../AppContent.tsx";
import {TestPage} from "../../pages/TestPage/TestPage.tsx";
import {NotFound} from "../../pages/NotFound/ui/NotFound.tsx";

export const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH.BASE} element={<AppContent/>}>
                    <Route index path={PATH.BASE} element={<Books/>}/>
                    <Route path={PATH.TEST_PAGER} element={<TestPage/>}/>
                    <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
