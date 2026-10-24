import type { Product } from "../Product";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({product}:ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
        </div>
    );
}

export default ProductCard;