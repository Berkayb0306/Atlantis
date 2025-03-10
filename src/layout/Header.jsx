import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, ChevronDown, User } from "lucide-react";

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const shopMenuRef = useRef(null);
  const pagesMenuRef = useRef(null);

  // 📌 Dışarı tıklanınca menülerin kapanmasını sağla
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
      if (pagesMenuRef.current && !pagesMenuRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* ✅ LOGO */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Atlantis
        </Link>

        {/* ✅ NAVBAR */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>

          {/* 📌 SHOP DROPDOWN MENÜSÜ */}
          <div className="relative" ref={shopMenuRef}>
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Shop <ChevronDown size={16} className="ml-1" />
            </button>
            {isShopOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-64 p-4 grid grid-cols-2 gap-4 z-50">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Women</h3>
                  <Link to="/shop/women/bags" className="block text-gray-600 hover:text-blue-500">Bags</Link>
                  <Link to="/shop/women/belts" className="block text-gray-600 hover:text-blue-500">Belts</Link>
                  <Link to="/shop/women/cosmetics" className="block text-gray-600 hover:text-blue-500">Cosmetics</Link>
                  <Link to="/shop/women/hats" className="block text-gray-600 hover:text-blue-500">Hats</Link>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Men</h3>
                  <Link to="/shop/men/bags" className="block text-gray-600 hover:text-blue-500">Bags</Link>
                  <Link to="/shop/men/belts" className="block text-gray-600 hover:text-blue-500">Belts</Link>
                  <Link to="/shop/men/cosmetics" className="block text-gray-600 hover:text-blue-500">Cosmetics</Link>
                  <Link to="/shop/men/hats" className="block text-gray-600 hover:text-blue-500">Hats</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>

          {/* 📌 PAGES DROPDOWN */}
          <div className="relative" ref={pagesMenuRef}>
            <button
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Pages <ChevronDown size={16} className="ml-1" />
            </button>
            {isPagesOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 p-2 z-50">
                <Link to="/inner/pricing" className="block px-4 py-2 hover:bg-gray-100">Pricing</Link>
                <Link to="/inner/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                <Link to="/inner/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
              </div>
            )}
          </div>
        </nav>

        {/* ✅ ICONLAR & LOGIN */}
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
