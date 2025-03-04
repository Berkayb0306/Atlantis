import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ShopCategories from "../components/ShopCategories";
import BrandLogos from "../components/BrandLogos";
import ProductFilter from "../components/ProductFilter";

const ProductGrid = ({ view, sortOption }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating.rate - a.rating.rate;
    return 0;
  });

  return (
    <div className={`grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
      {sortedProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-gray-900 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  view: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
};

const ShopPage = () => {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("popularity");

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shop</h2>
      
      {/* Shop Categories Component */}
      <ShopCategories />
      
      {/* Product Filter Component */}
      <ProductFilter 
        onViewChange={setView} 
        onSortChange={setSortOption} 
        onFilterClick={() => console.log("Filter button clicked")} 
      />
      
      {/* Product Grid Component */}
      <ProductGrid view={view} sortOption={sortOption} />
      
      {/* Brand Logos Component */}
      <BrandLogos />
      
    </div>
  );
};

export default ShopPage;
