import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../store/categories/category-action";
import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    }
    
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;