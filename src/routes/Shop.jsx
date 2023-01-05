import { ProductsContext as ProductsContext } from "../context/Products";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} ></ProductCard>
      ))}
    </div>
  );
}

export default Shop;