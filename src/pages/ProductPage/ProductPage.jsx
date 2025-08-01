import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductPage(){

    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));

    if (!product) return <p>Product not found.</p>

    return(
        <div>
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
        </div>
    )
}

export default ProductPage;