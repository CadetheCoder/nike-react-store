import { useCart } from "../context/CartContext";
const { cartItems } = useCart();

const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
const shipping = 0;
const total = shipping + subtotal;