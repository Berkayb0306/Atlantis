import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";
import ShopCategories from "../components/ShopCategories";
import BrandLogos from "../components/BrandLogos";
import ProductFilter from "../components/ProductFilter";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid"); // ✅ Görünüm (Grid veya Liste)
  const [sortOption, setSortOption] = useState("popularity"); // ✅ Sıralama Seçeneği

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shop</h2>

      {/* Shop Categories Component */}
      <ShopCategories />

      {/* ✅ Product Filter Component (Eksik prop'lar eklendi) */}
      <ProductFilter 
        onViewChange={setView} 
        onSortChange={setSortOption} 
        onFilterClick={() => console.log("Filter button clicked")} 
      />

      {/* Product Grid Component */}
      <div className={`grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id}  
            image={product.image} 
            title={product.title} 
            price={product.price} 
          />
        ))}
      </div>

      {/* Brand Logos Component */}
      <BrandLogos />
    </div>
  );
};

export default ShopPage;
