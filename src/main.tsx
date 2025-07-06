import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATH} from "./constants.ts";
import {Books} from "./pages/Books/ui";
import {NotFound} from "./pages/NotFound";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={PATH.BASE} element={<App/>}>
                <Route path={PATH.BASE} element={<Books/>}/>
                <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

