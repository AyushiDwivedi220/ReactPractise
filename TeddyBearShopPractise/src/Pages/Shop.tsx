import {useState,useEffect} from "react"
import fetchProducts from "../api/products.ts"
import type { Product } from "../Product.ts";
import ProductCard from "../Components/ProductCard.tsx";
import "../App.css"
const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
        const loadProducts = async ()  =>{
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []
    );
     

    return(
        <div className="Products">
           <h1>Meet your SoulTeddy</h1>
           <div className="product-cards">
             {
                products.map((item) => (
                        <ProductCard key={item.id} product = {item} />
                    )
                )
            }
           </div>
        </div>
    )

}

export default Shop;
