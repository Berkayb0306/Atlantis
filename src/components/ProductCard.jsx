import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, gender = "all", categoryName = "all", categoryId = "0" }) => {
  if (!product || !product.id) {
    console.warn("⚠️ Missing product data:", product);
    return null;
  }

  const safeImage = product.image || product.images?.[0]?.url || "https://via.placeholder.com/150";
  const safeTitle = product.title || product.name || "No Product Name";
  const safePrice = product.price ?? 0;
  const safeDescription = product.description || "No description available.";
  const productNameSlug = safeTitle.toLowerCase().replace(/\s+/g, "-");

  const url = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`;

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center w-full max-w-xs cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <Link to={url} className="w-full">
        <img
          src={safeImage}
          alt={safeTitle}
          className="w-full h-40 object-cover mb-4 rounded-lg aspect-[4/3]"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
        <h2 className="text-lg font-semibold text-gray-800 text-center">{safeTitle}</h2>
        <p className="text-gray-600 text-sm">{safeDescription}</p>
        <p className="text-gray-600 text-sm">${safePrice.toFixed(2)}</p>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition"
      >
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  gender: PropTypes.string,
  categoryName: PropTypes.string,
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProductCard;