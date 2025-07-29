import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.css'

function Header(){

    return(
        <header>
            <Link to="/">
                <img src="./src/assets/nike-logo.avif" alt="nike logo" className={styles.logo}/>
            </Link>
            <Navbar/>
            <Link to="/cart">
                <img src="./src/assets/shopping-cart.avif" alt="shopping cart navigation button" className={styles['cart-btn']}></img>
            </Link>
        </header>
    )
}

export default Header;