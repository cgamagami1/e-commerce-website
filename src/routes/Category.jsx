import "./category.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { getCategoryMap } from "../store/categories/category-selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoryMap);
  const products = categoriesMap[category];

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>
  );
}

export default Category;