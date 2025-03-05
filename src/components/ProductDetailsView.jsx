import { useState } from "react";
import PropTypes from "prop-types";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const ProductDetailsView = ({ product }) => {
  // Eğer product.images yoksa veya boşsa, placeholder kullan
  const images = Array.isArray(product.images) && product.images.length > 0 
    ? product.images 
    : ["/placeholder.jpg"];

  // Slider için currentIndex
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kaydırma fonksiyonları
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Örnek renk seçenekleri (API'den gerçek veriyi 'product.colors' olarak alabilirsin)
  const colors = product.colors || ["#ffb800", "#00b8ff", "#ff0077", "#00ff88"];

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-8">
      {/* Sol Bölüm: Ürün Görsel Slider */}
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            className="w-full h-auto object-contain rounded-md"
          />
          {/* Sol Ok */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          >
            ◀
          </button>
          {/* Sağ Ok */}
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* Thumbnail'lar */}
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
            />
          ))}
        </div>
      </div>

      {/* Sağ Bölüm: Ürün Bilgileri */}
      <div className="md:w-1/2 flex flex-col">
        {/* Ürün Başlığı */}
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        
        {/* Rating & Reviews */}
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-yellow-500 text-xl ${i < (product.rating || 0) ? "" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-600 text-sm">{product.reviews || 0} Reviews</span>
        </div>

        {/* Fiyat & Stok Bilgisi */}
        <p className="text-2xl font-bold my-2">
          ${product.price?.toFixed(2) || "0.00"}
        </p>
        <p className="text-gray-700">
          Availability:{" "}
          <span className="text-green-600 font-semibold">
            {product.availability || "In Stock"}
          </span>
        </p>

        {/* Ürün Açıklaması */}
        <p className="text-gray-600 mt-4">{product.description}</p>

        {/* Renk Seçenekleri (Örnek) */}
        <div className="mt-4">
          <h3 className="text-gray-800 font-semibold">Colors:</h3>
          <div className="flex space-x-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex items-center space-x-4 mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Select Options
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
    description: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    reviews: PropTypes.number,
    availability: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductDetailsView;
