// src/components/Header.jsx
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Search, ShoppingCart, Heart, LogOut, User, ChevronDown } from "lucide-react";
import { logoutUser } from "../redux/actions/clientActions";
import { useState, useRef, useEffect } from "react";
import CartDropdown from "../components/CartDropdown";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cartItems = useSelector((state) => state.cart.cart); // Sepet içeriğini al
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Sepet dropdown için state
  const pagesMenuRef = useRef(null);
  const categoriesMenuRef = useRef(null);
  const cartMenuRef = useRef(null); // Sepet dropdown için ref

  // Toplam ürün sayısını hesapla
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  // 📌 Dışarı tıklanınca menülerin kapanmasını sağla
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesMenuRef.current && !pagesMenuRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
      if (categoriesMenuRef.current && !categoriesMenuRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
      if (cartMenuRef.current && !cartMenuRef.current.contains(event.target)) {
        setIsCartOpen(false);
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
        <Link to="/" className="text-2xl font-bold text-gray-800">Atlantis</Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/shop" className="hover:text-blue-500">Shop</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>

          {/* 📌 Categories Dropdown Menüsü */}
          <div className="relative" ref={categoriesMenuRef}>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Categories <ChevronDown size={16} className="ml-1" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-64 p-4 grid grid-cols-2 gap-4 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/${category.code.split(":")[0]}/${category.title}/${category.id}`}
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 📌 Pages Dropdown Menüsü */}
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

        <div className="flex items-center space-x-6">
          <Search size={20} className="cursor-pointer hover:text-blue-500" />
          
          {/* 📌 Sepet İkonu ve Dropdown */}
          <div className="relative" ref={cartMenuRef}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="flex items-center space-x-2 hover:text-blue-500"
            >
              <ShoppingCart size={20} />
              <span>Sepetim ({totalItems} Ürün)</span>
            </button>
            {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
          </div>

          <Heart size={20} className="hover:text-blue-500 cursor-pointer" />

          {!user?.email ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => history.push("/login")}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <User size={20} className="mr-1" />
                Login
              </button>
              <Link to="/signup" className="flex items-center text-gray-700 hover:text-blue-500">
                <User size={20} className="mr-1" />
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt="Profil Resmi"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="text-sm font-medium">{user.name}</span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="flex items-center text-red-500 hover:text-red-700"
              >
                <LogOut size={20} className="mr-1" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;