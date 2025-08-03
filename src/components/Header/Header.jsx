import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.css';
import CartIcon from "../CartIcon/CartIcon";

function Header(){

    return(
        <header>
            <Link to="/">
                <img src="/nike-logo.avif" alt="nike logo" className={styles.logo}/>
            </Link>
            <Navbar/>
            <CartIcon/>
        </header>
    )
}

export default Header;