import Grid from "../../components/Grid/Grid";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import { Link } from "react-router-dom";

function Shoes(){

    return(
        <Container>
            <Grid>
                {products.filter((product) => product.category === "shoes").map((product => (
                    <Link
                        key={product.id} 
                        to={`/product/${product.id}`}>
                        <ProductCard product={product}/>
                    </Link>
                )))}
            </Grid>
        </Container>
    )
}

export default Shoes;