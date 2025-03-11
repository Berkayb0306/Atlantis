import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Search, ShoppingCart, Heart, LogOut, User } from "lucide-react";
import { logoutUser } from "../redux/actions/clientActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

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
        </nav>

        <div className="flex items-center space-x-6">
          <Search size={20} className="cursor-pointer hover:text-blue-500" />
          <ShoppingCart size={20} className="hover:text-blue-500 cursor-pointer" />
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
