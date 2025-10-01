import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";

function HamburgerMenu(){

    const [isOpen, setOpen] = useState(false);

    return(
        <nav className={styles.nav}>
            <div className={styles['hamburger-container']}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>

            <div className={`${styles['side-bar']} ${isOpen ? styles.show : ''}`}>
                <ul className={styles['nav-list']}>
                    <Link to="/" onClick={() => setOpen(false)} className={styles['nav-link']}><li>Home</li></Link>
                    <Link to="/shoes" onClick={() => setOpen(false)} className={styles['nav-link']}><li>Shoes</li></Link>
                    <Link to="/socks" onClick={() => setOpen(false)} className={styles['nav-link']}><li>Socks</li></Link>
                    <Link to="/slides" onClick={() => setOpen(false)} className={styles['nav-link']}><li>Slides</li></Link>
                </ul>
            </div>

            {isOpen && <div className={styles.overlay} onClick={() => setOpen(false)}/>}
        </nav>
    )
}

export default HamburgerMenu;