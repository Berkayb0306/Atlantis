import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function BestsellerProducts() {
  // ✅ Redux Store’dan API verisini al
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.fetchState === "FETCHING");

  if (isLoading) {
    return <div className="text-center text-lg font-semibold">Yükleniyor...</div>;
  }

  if (!products?.length) {
    return <div className="text-center text-lg font-semibold">Ürün bulunamadı.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-6">BESTSELLER PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product} // ✅ Tüm product verisini gönder
          />
        ))}
      </div>
    </div>
  );
}
