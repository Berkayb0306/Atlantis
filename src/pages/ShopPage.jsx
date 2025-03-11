import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const totalProducts = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Products</h2>

      {fetchState === "FETCHING" ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}

      <p className="mt-6 text-center text-gray-600">
        Total Products: {totalProducts}
      </p>
    </div>
  );
};

export default ShopPage;
