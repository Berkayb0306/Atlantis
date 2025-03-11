import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopCategories = () => {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-4">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {topCategories.map((category) => (
          <Link 
            to={`/shop/${category.code.split(":")[0]}/${category.title}/${category.id}`} 
            key={category.id} 
            className="relative group"
          >
            <img src={category.img} alt={category.title} className="w-full h-56 object-cover rounded-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center opacity-100">
              <h3 className="text-lg font-bold">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
