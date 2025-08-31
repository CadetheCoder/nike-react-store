import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Shoes from "../../pages/Shoes/shoes"
import Socks from "../../pages/Socks/Socks"
import Sale from "../../pages/Sale/Sale"
import Home from "../../pages/Home/Home"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li><Link to="/" element={<Home/>}>Home</Link></li>
                <li><Link to="/shoes" element={<Shoes/>}>Shoes</Link></li>
                <li><Link to="/socks" element={<Socks/>}>Socks</Link></li>
                <li><Link to="/slides" element={<Slides/>}>Slides</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar