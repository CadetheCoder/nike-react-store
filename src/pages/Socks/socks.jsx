import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import { Link } from "react-router-dom";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import styles from "./Socks.module.css";

function Socks(){
    return(
        <Container>
            <ProductContainer>
                {products.filter((product) => product.category === "socks").map((product => (
                    <Link 
                        className={styles.link}
                        key={product.id} 
                        to={`/product/${product.id}`}>
                        <ProductCard product={product}/>
                    </Link>
                )))}
            </ProductContainer>
        </Container>
    )
}

export default Socks;

