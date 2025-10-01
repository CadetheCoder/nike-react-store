import { useParams } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductPage.module.css";
import { useCart } from "../../context/CartContext";

function ProductPage(){

    const { addToCart } = useCart();

    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));

    if (!product) return <p>Product not found.</p>

    return(
        <div className={styles.container}>
            <div className={styles['img-container']}>
                <img src={product.image} alt={product.name} className={styles['product-img']}/>
            </div>
            <div className={styles['text-container']}>
                <h1>{product.name}</h1>
                <p className={styles.gender}>{product.gender}</p>
                <p className={styles.price}>¥{product.price.toLocaleString()}</p>
                <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
                <p className={styles.desc}>{product.desc}</p>
                <ul className={styles['details-list']}>
                    {product.details.map((d)=> <li className={styles['details-item']}>{d}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ProductPage;