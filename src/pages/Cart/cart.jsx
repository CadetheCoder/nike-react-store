import { useCart } from "../../context/CartContext";
import styles from './Cart.module.css';

function Cart(){
    const { cartItems } = useCart();
    console.log(cartItems);

    return(
        <div className={styles.container}>
            <div className={styles['product-container']}>
                <h1>Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.name}/>
                            <div className={styles['product-text']}>
                                
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className={styles['summary-container']}>
                <div className={styles['summary-text-wrapper']}>
                    <h1>Summary</h1>
                    <p>Subtotal</p>
                    <p>Estimated Shipping & Handling</p>
                    <p className={styles.total}>Total</p>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;