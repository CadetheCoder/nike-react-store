import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Subheading from "./components/Subheading/Subheading";
import UtilityNav from "./components/UtilityNav/UtilityNav";

function Layout(){
    return(
        <>
            <UtilityNav/>
            <Header/>
            <Subheading/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;