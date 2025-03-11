import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p>Ürünler yükleniyor...</p>
      </div>
    );
  }

  if (fetchState === "FAILED") {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-500">Ürünler yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p>Ürün bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
