import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center w-full max-w-xs">
 
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg aspect-[4/3]" />
      
    
      <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
      <p className="text-gray-600 text-sm">${price}</p>

    
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition">
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
};

// PropTypes doğrulaması
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
