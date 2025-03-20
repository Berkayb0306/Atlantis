import { useState } from "react";
import PropTypes from "prop-types";

const ProductDetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  // Görselleri doğru formatta çekme
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images.map((img) => img.url)
    : product.image
      ? [product.image]
      : ["https://via.placeholder.com/150"];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Sekme Butonları */}
      <div className="border-b flex space-x-6 mb-4">
        <button
          className={`pb-2 border-b-2 ${activeTab === "description" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("description")}
        >
          Açıklama
        </button>
        <button
          className={`pb-2 border-b-2 ${activeTab === "additional" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("additional")}
        >
          Ek Bilgiler
        </button>
        <button
          className={`pb-2 border-b-2 ${activeTab === "reviews" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Değerlendirmeler ({product.sell_count || 0})
        </button>
      </div>

      {/* Sekme İçerikleri */}
      {activeTab === "description" && (
        <div className="text-gray-700">
          <img
            src={images[0]}
            alt={product.title || product.name || "Product Image"}
            className="w-full max-w-md h-auto object-contain rounded-md mb-4"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
          />
          <p>{product.description || "Ürün açıklaması bulunmuyor."}</p>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="text-gray-700">
          <p><strong>Kategori ID:</strong> {product.category_id || "Bilinmiyor"}</p>
          <p><strong>Stok:</strong> {product.stock !== undefined ? product.stock : "Bilgi yok"}</p>
          <p><strong>Mağaza ID:</strong> {product.store_id || "Bilinmiyor"}</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-700">
          {product.rating !== undefined ? (
            <div>
              <p>
                Ortalama Değerlendirme: <strong>{product.rating.toFixed(1)}</strong>/5
              </p>
              <p>Satış Sayısı: {product.sell_count || 0}</p>
            </div>
          ) : (
            <p>Henüz değerlendirme yok.</p>
          )}
        </div>
      )}
    </div>
  );
};

ProductDetailsTabs.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    category: PropTypes.string,
    category_id: PropTypes.number,
    stock: PropTypes.number,
    store_id: PropTypes.number,
    rating: PropTypes.number,
    sell_count: PropTypes.number,
  }).isRequired,
};

export default ProductDetailsTabs;