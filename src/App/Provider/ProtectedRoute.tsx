import {Navigate} from 'react-router-dom';
import * as React from "react";


const ProtectedRoute = ({children, isAuth, redirectPath}) => {
    if (!isAuth) {
        return <Navigate to={redirectPath}/>
    }
    return children
};
export default ProtectedRoute;