import { useState } from "react";
import PropTypes from "prop-types";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const ProductDetailsView = ({ product }) => {
  // 🔹 Ürün başlığını uygun formatta çek
  const productTitle =
    product.title?.trim() ||
    product.name?.trim() ||
    product.description?.slice(0, 30) ||
    "Ürün Başlığı Mevcut Değil";

  // 🔹 Görselleri doğru formatta çek
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images.map((img) => img.url)
    : product.image
      ? [product.image]
      : ["https://via.placeholder.com/150"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Kaydırma fonksiyonları
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 🔹 Stok durumuna göre dinamik metin
  const availability = product.stock !== undefined
    ? product.stock > 0
      ? "Stokta Var"
      : "Stokta Yok"
    : "Bilgi Yok";

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-8">
      {/* Sol Bölüm: Ürün Görsel Slider */}
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            className="w-full h-auto object-contain rounded-md"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
          />
          {/* Sol Ok */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          {/* Sağ Ok */}
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>

        {/* Thumbnail’lar */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                index === currentIndex ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            />
          ))}
        </div>
      </div>

      {/* Sağ Bölüm: Ürün Bilgileri */}
      <div className="md:w-1/2 flex flex-col">
        {/* Ürün Başlığı */}
        <h1 className="text-3xl font-bold mb-2">{productTitle}</h1>

        {/* Rating & Satış Sayısı */}
        <div className="flex items-center mb-2">
          {product.rating !== undefined ? (
            <>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 text-xl ${
                    i < Math.floor(product.rating) ? "filled" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                {product.rating.toFixed(1)} ({product.sell_count || 0} satış)
              </span>
            </>
          ) : (
            <span className="text-gray-600 text-sm">Değerlendirme yok</span>
          )}
        </div>

        {/* Fiyat & Stok Bilgisi */}
        <p className="text-2xl font-bold my-2">{product.price?.toFixed(2) || "0.00"} TL</p>
        <p className="text-gray-700">
          Durum:{" "}
          <span className={`font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {availability}
          </span>
          {product.stock !== undefined && (
            <span className="ml-2">({product.stock} adet)</span>
          )}
        </p>

        {/* Ürün Açıklaması */}
        <p className="text-gray-600 mt-4">
          {product.description || "Ürün açıklaması bulunmuyor."}
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex items-center space-x-4 mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Sepete Ekle
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-200">
            <Heart size={20} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-200">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-200">
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetailsView.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    rating: PropTypes.number,
    sell_count: PropTypes.number,
    stock: PropTypes.number,
    store_id: PropTypes.number,
    category_id: PropTypes.number,
  }).isRequired,
};

export default ProductDetailsView;