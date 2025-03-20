import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedProduct2 } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProduct2() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const colors = ["blue", "green", "red", "black"];

  const dispatch = useDispatch();
  const featuredProduct2 = useSelector((state) => state.product.featuredProduct2);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchFeaturedProduct2());
  }, [dispatch]);

  if (fetchState === "FETCHING") {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-gray-600">Öne çıkan ürün yükleniyor...</p>
      </div>
    );
  }

  if (fetchState === "FAILED" || !featuredProduct2) {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-red-500">Öne çıkan ürün yüklenemedi.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productWithColor = { ...featuredProduct2, selectedColor };
    dispatch(addToCart(productWithColor));
    toast.success(`${featuredProduct2.title} (${selectedColor}) sepete eklendi!`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row-reverse items-start gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={featuredProduct2.image || "https://picsum.photos/300/450?random=1"} // Boyut 400x600 -> 300x450
            alt={featuredProduct2.title || "Person with Food"}
            className="rounded max-w-full max-h-[450px] object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-2">MOST POPULAR</h2>
          <p className="text-gray-700 mb-4 text-sm">
            We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
          </p>

          <div className="border rounded p-4 flex flex-col items-center">
            <img
              src={featuredProduct2.image || "https://picsum.photos/200/150?random=2"} // Boyut 300x200 -> 200x150
              alt={featuredProduct2.title || "Popular Product"}
              className="rounded max-w-full max-h-[150px] object-cover mb-4"
            />

            <p className="text-gray-900 font-medium">{featuredProduct2.title || "English Department"}</p>
            <p className="text-gray-500 text-sm flex items-center mt-1">
              📦 {featuredProduct2.sell_count || 15} Sales
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 line-through">
                ${featuredProduct2.originalPrice?.toFixed(2) || "16.48"}
              </span>
              <span className="text-green-600 font-semibold">
                ${featuredProduct2.price?.toFixed(2) || "6.48"}
              </span>
            </div>

            <div className="flex space-x-2 mt-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}