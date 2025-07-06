import './App.css'
import {Nav} from "./widgets/ui/Nav";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}


export default App
