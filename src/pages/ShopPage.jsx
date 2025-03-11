import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; //
import { fetchCategories } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import ShopCategories from "../components/ShopCategories";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shop - {categoryName}</h2>
      <ShopCategories />
    </div>
  );
};

export default ShopPage;
