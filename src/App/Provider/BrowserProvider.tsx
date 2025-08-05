import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {CircularProgress} from "@mui/material";
import {PATH} from "@/constants.ts";
import {AppContent} from "@/App/AppContent.tsx";
import {Profile} from "@/pages/Profile/Profile.tsx";
import {NotFound} from "@/pages/NotFound";
import {Books} from "@/pages/Books";
import {BookItem} from "@/widgets/ui/BookItem";
import {Registration} from "@/pages/Registration";
import {Admin} from "@/pages/Admin";
import {Auth} from "@/pages/Auth";
import {useAuth} from "@/App/store/hooks/useAuth.ts";
import ProtectedRoute from "@/App/Provider/ProtectedRoute.tsx";
import {UserRole} from "@/App/store/reducers/authReducer/authSchema.ts";

export const BrowserProvider = () => {
    const {isAuth, role} = useAuth();

    return (
        <BrowserRouter future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <Routes>
                <Route path={PATH.BASE} element={<AppContent/>}>
                    <Route index path={PATH.BASE} element={<Books/>}/>
                    <Route path={PATH.BOOKITEM} element={
                        <Suspense fallback={
                            <CircularProgress size="30px"/>}><BookItem/></Suspense>}></Route>
                    <Route path={PATH.AUTH} element={<Auth/>}/>
                    <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                    <Route path={PATH.PROFILE} element={<ProtectedRoute isAuth={isAuth}
                                                                        redirectPath={PATH.AUTH}><Profile/></ProtectedRoute>}/>
                    <Route path={PATH.ADMIN} element={<ProtectedRoute isAuth={isAuth && role.includes(UserRole.ADMIN)}
                                                                      redirectPath={PATH.AUTH}><Admin/></ProtectedRoute>}/>
                    <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
