import  { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, ChevronDown, User } from "lucide-react";

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        
    
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Atlantis
        </Link>

       
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-500">Home</Link>

       
          <div className="relative">
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Shop <ChevronDown size={16} className="ml-1" />
            </button>
            {isShopOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48 p-2">
                <Link to="/shop/category1" className="block px-4 py-2 hover:bg-gray-100">Category 1</Link>
                <Link to="/shop/category2" className="block px-4 py-2 hover:bg-gray-100">Category 2</Link>
                <Link to="/shop/category3" className="block px-4 py-2 hover:bg-gray-100">Category 3</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/pages" className="hover:text-blue-500">Pages</Link>
        </nav>

      
        <div className="flex items-center space-x-4">
        <Link to="/signup" className="text-blue-500 hover:underline flex items-center">
            <User size={18} className="mr-1" /> Sign Up
        </Link>
          <Search size={20} className="cursor-pointer hover:text-blue-500" />
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} className="hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 rounded-full">1</span>
          </div>
          <div className="relative cursor-pointer">
            <Heart size={20} className="hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">1</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
