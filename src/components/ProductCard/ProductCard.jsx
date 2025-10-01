import styles from './ProductCard.module.css';

function ProductCard({ product }){

    return(
        <div className={styles}>
            <div className={styles['product-card']}>
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p className={styles.gender}>{product.gender}</p>
                <p className={styles.price}>¥{product.price.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default ProductCard;