import Navbar from "../navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer";

const Layout = () =>{
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;