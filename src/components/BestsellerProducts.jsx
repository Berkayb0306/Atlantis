import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestsellers } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

export default function BestsellerProducts() {
  const dispatch = useDispatch();
  const bestsellers = useSelector((state) => state.product.bestsellers);
  const fetchState = useSelector((state) => state.product.fetchState);
  const isLoading = fetchState === "FETCHING";
  const fetchError = fetchState === "FAILED";

  useEffect(() => {
    if (!bestsellers || bestsellers.length === 0) {
      console.log("Fetching bestsellers...");
      dispatch(fetchBestsellers(8)); // İlk 8 bestseller’ı çek
    }
  }, [dispatch, bestsellers]);

  console.log("Bestsellers:", bestsellers);
  console.log("Fetch state in BestsellerProducts:", fetchState);

  if (isLoading) {
    return <div className="text-center text-lg font-semibold">Yükleniyor...</div>;
  }

  if (fetchError) {
    return <div className="text-center text-lg text-red-500">Bestseller ürünler yüklenemedi.</div>;
  }

  if (!bestsellers || bestsellers.length === 0) {
    return <div className="text-center text-lg font-semibold">Ürün bulunamadı.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-6">EN ÇOK SATAN ÜRÜNLER</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestsellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            gender="all"
            categoryName="all"
            categoryId="0"
          />
        ))}
      </div>
    </div>
  );
}