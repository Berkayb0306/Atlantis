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
        <div className="text-gray-700">
          <p>{product.description || "No description available."}</p>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="text-gray-700">
          <p><strong>Brand:</strong> {product.brand || "Unknown"}</p>
          <p><strong>Category:</strong> {product.category || "N/A"}</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-700">
          {product.reviews > 0 ? (
            <p>{product.reviews} customer reviews available.</p>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

ProductDetailsTabs.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    reviews: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsTabs;
