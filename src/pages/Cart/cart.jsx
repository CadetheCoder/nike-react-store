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
                        <div key={index} className={styles['cart-item-container']}>
                            <img src={item.image} alt={item.name} className={styles['cart-item-img']}/>
                            <div className={styles['cart-item-text-container']}>
                                <h3>{item.name}</h3>
                                <p className={styles['cart-item-gender']}>{item.gender}</p>
                                <p className={styles['cart-item-price']}>¥{item.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className={styles['summary-container']}>
                <div className={styles['summary-text-wrapper']}>
                    <h1>Summary</h1>
                    <div className={styles['subtotal-container']}>
                        <p>Subtotal</p>
                        <p>price</p>
                    </div>
                    <div className={styles['shipping-container']}>
                        <p>Estimated Shipping & Handling</p>
                        <p>Free</p>
                    </div>
                    <div className={styles['total-container']}>
                        <p className={styles.total}>Total</p>
                        <p>price</p>
                    </div>
                    <button className={styles['checkout-btn']}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;