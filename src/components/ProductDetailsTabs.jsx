import { useState } from "react";
import PropTypes from "prop-types";

const ProductDetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Sekme Butonları */}
      <div className="border-b flex space-x-6 mb-4">
        <button
          className={`pb-2 border-b-2 ${activeTab === "description" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 border-b-2 ${activeTab === "additional" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={`pb-2 border-b-2 ${activeTab === "reviews" ? "border-black font-bold" : "border-transparent text-gray-500"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({product.reviews || 0})
        </button>
      </div>

      {/* Sekme İçerikleri */}
      {activeTab === "description" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            {/* Sütun-1: Örnek Resim ve Metin */}
            <img
            src="https://picsum.photos/400/300"
            alt="Placeholder"
            className="rounded-md mb-4 w-full object-cover"
            />
            <p className="text-gray-700 font-semibold">the quick fox jumps over</p>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            {/* Sütun-2: Örnek Başlık ve Metin */}
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            {/* Sütun-3: Örnek Başlık ve Metin */}
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src="https://picsum.photos/400/300"
            alt="Placeholder"
              className="rounded-md mb-4 w-full object-cover"
            />
            <p className="text-gray-700 font-semibold">the quick fox jumps over</p>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src="https://picsum.photos/400/300"
            alt="Placeholder"
              className="rounded-md mb-4 w-full object-cover"
            />
            <p className="text-gray-700 font-semibold">the quick fox jumps over</p>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">the quick fox jumps over</h3>
            <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
            <p className="text-gray-700 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      )}
    </div>
  );
};

ProductDetailsTabs.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    reviews: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
    availability: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsTabs;
