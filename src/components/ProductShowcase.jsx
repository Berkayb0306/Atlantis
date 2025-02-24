import  { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const categories = ["Men", "Women", "Accessories"];
const products = [
  { id: 1, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/4110004/pexels-photo-4110004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  { id: 2, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/5946093/pexels-photo-5946093.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  { id: 3, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/3298640/pexels-photo-3298640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  { id: 4, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/4110004/pexels-photo-4110004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  { id: 5, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/5946093/pexels-photo-5946093.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  { id: 6, title: "Graphic Design", department: "English Department", price: 16.48, discountPrice: 6.48, image: "https://images.pexels.com/photos/3298640/pexels-photo-3298640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Men");

  return (
    <div className="container mx-auto px-6 py-12">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">BESTSELLER PRODUCTS</h2>
        <div className="flex items-center space-x-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-lg font-medium ${activeCategory === category ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        <div className="col-span-1 bg-yellow-400 p-8 flex flex-col justify-center items-start text-black">
          <h3 className="text-lg font-bold">FURNITURE</h3>
          <p className="text-sm">5 Items</p>
          <img
            src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Promo"
            className="w-full mt-4 rounded-lg"
          />
        </div>

       
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
