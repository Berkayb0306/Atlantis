import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

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
    if (sortOption === "rating" && a.rating && b.rating) return b.rating.rate - a.rating.rate;
    return 0;
  });

  return (
    <div className={`grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id} // ✅ ProductDetail'e yönlendirme için id eklendi
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  view: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
};

export default ProductGrid;
