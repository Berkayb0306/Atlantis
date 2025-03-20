import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestsellers } from "../redux/actions/productActions";
import ProductCard from "./ProductCard"; // Varsayılan ProductCard’ı kullanacağız

const categories = ["Men", "Women", "Accessories"];

const ProductShowcase2 = () => {
  const [activeCategory, setActiveCategory] = useState("Men");

  const dispatch = useDispatch();
  const bestsellers = useSelector((state) => state.product.bestsellers);
  const isLoading = useSelector((state) => state.product.fetchState === "FETCHING");

  useEffect(() => {
    dispatch(fetchBestsellers(6, activeCategory.toLowerCase())); // 6 ürün çekiyoruz (tasarıma uygun)
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
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Ürünler */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-800">BESTSELLER PRODUCTS</h2>
            <div className="flex space-x-6 text-gray-500 font-medium">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${
                    activeCategory === category
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-500"
                  } transition-all duration-300`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                ←
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              <div className="col-span-2 text-center py-12">
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

        {/* Promosyon Görseli */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Promotional Image"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase2; 