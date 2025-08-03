import {Navigate} from 'react-router-dom';
import {ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    isAuth: boolean;
    redirectPath: string;
}


const ProtectedRoute = ({children, isAuth, redirectPath}: ProtectedRouteProps) => {
    if (!isAuth) {
        return <Navigate to={redirectPath}/>
    }
    return children
};
export default ProtectedRoute;