import {Nav} from "../widgets/ui/Nav";
import {Outlet} from "react-router-dom";

export const AppContent = () => {

    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
};
