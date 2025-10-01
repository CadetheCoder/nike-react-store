import styles from './ProductContainer.module.css';

function ProductContainer({ children }){
    return(
        <div className={styles.container}> 
            {children}
        </div>
    )
}

export default ProductContainer;