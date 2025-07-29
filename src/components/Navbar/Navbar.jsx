import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Shoes from "../../pages/shoes"
import Socks from "../../pages/socks"
import Sale from "../../pages/sale"
import Home from "../../pages/Home"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li><Link to="/" element={<Home/>}>Home</Link></li>
                <li><Link to="/shoes" element={<Shoes/>}>Shoes</Link></li>
                <li><Link to="/socks" element={<Socks/>}>Socks</Link></li>
                <li><Link to="/sale" element={<Sale/>}>Sale</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar