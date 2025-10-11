import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shoes">Shoes</Link></li>
                <li><Link to="/socks">Socks</Link></li>
                <li><Link to="/slides">Slides</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar