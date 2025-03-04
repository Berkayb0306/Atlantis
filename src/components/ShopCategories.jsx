import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "CLOTHS", items: 5, image: "https://dummyimage.com/300" },
  { id: 2, name: "SHOES", items: 5, image: "https://dummyimage.com/300" },
  { id: 3, name: "BAGS", items: 5, image: "https://dummyimage.com/300" },
  { id: 4, name: "WATCHES", items: 5, image: "https://dummyimage.com/300" },
  { id: 5, name: "ACCESSORIES", items: 5, image: "https://dummyimage.com/300" }
];

const ShopCategories = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link to={`/shop/${category.id}`} key={category.id} className="relative group">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-56 object-cover rounded-md"
              onError={(e) => e.target.src = "https://via.placeholder.com/300"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center opacity-100">
              <h3 className="text-lg font-bold">{category.name}</h3>
              <p className="text-sm">{category.items} Items</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
