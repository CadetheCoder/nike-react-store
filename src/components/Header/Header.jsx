import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.css';
import CartIcon from "../CartIcon/CartIcon";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header(){

    return(
        <header>
            <Link to="/">
                <img src="/nike-logo.avif" alt="nike logo" className={styles.logo}/>
            </Link>
            <Navbar/>
            <CartIcon/>
            <HamburgerMenu/>
        </header>
    )
}

export default Header;