import CategoryPreview from "../components/CategoryPreview";
import { useSelector } from "react-redux";
import { getCategoryMap } from "../store/categories/category-selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(getCategoryMap);
  
  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }
    </>
  );
}

export default CategoriesPreview;