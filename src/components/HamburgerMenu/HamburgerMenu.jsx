import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu(){
    const [isOpen, setOpen] = useState(false);

    return(
        <nav className={styles.nav}>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            {isOpen && (
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>Shoes</li>
                    <li>Socks</li>
                    <li>Sale</li>
                </ul>
            )}
        </nav>

    )
}

export default HamburgerMenu;