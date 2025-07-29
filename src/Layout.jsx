import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Subheading from "./components/Subheading/Subheading";

function Layout(){
    return(
        <>
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