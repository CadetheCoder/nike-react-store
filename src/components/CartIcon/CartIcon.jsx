import { Link } from "react-router-dom";
import styles from './CartIcon.module.css';
import { useCart } from "../../context/CartContext";

function CartIcon(){
    const { cartTotal } = useCart();

    return(
        <Link to="/cart" className={styles.link}>
            <img src="/cart-icon.webp" alt="shopping cart navigation button" className={styles['cart-btn']}></img>
            <span className={`${styles['cart-total']} ${cartTotal() > 0 ? styles['active'] : ''}`}>{cartTotal()}</span>
        </Link>
    )
}

export default CartIcon;