import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestsellers } from "../redux/actions/productActions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const categories = ["Men", "Women", "Accessories"];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Men");

  const dispatch = useDispatch();
  const bestsellers = useSelector((state) => state.product.bestsellers);
  const isLoading = useSelector((state) => state.product.fetchState === "FETCHING");

  useEffect(() => {
    dispatch(fetchBestsellers(8, activeCategory.toLowerCase()));
  }, [dispatch, activeCategory]);

  console.log(`Bestsellers for ${activeCategory}:`, bestsellers);

  if (isLoading) {
    return (
      <div className="text-center text-lg font-semibold py-12">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <span>Yükleniyor...</span>
      </div>
    );
  }

  if (!bestsellers?.length) {
    return (
      <div className="text-center text-lg font-semibold py-12">
        {activeCategory} kategorisinde bestseller ürün bulunamadı.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-800">BESTSELLER PRODUCTS</h2>
        <div className="flex items-center space-x-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-1 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col justify-center items-start text-black rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold">{activeCategory.toUpperCase()}</h3>
          <p className="text-sm mt-1">{bestsellers.length} Items Available</p>
          <img
            src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Promo"
            className="w-full mt-4 rounded-lg shadow-md"
          />
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>

        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {bestsellers.length > 0 ? (
            bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                gender={activeCategory.toLowerCase()}
                categoryName={activeCategory.toLowerCase()}
                categoryId="0"
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <img
                src="https://via.placeholder.com/150?text=No+Products"
                alt="No Products"
                className="mx-auto mb-4 opacity-50"
              />
              <p className="text-gray-500 text-lg">
                {activeCategory} kategorisinde bestseller ürün bulunamadı.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;