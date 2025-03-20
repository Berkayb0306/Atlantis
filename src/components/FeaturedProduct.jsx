import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProduct() {
  const dispatch = useDispatch();
  const featuredProduct = useSelector((state) => state.product.featuredProduct);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchFeaturedProduct());
  }, [dispatch]);

  if (fetchState === "FETCHING") {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-gray-600">Öne çıkan ürün yükleniyor...</p>
      </div>
    );
  }

  if (fetchState === "FAILED" || !featuredProduct) {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-red-500">Öne çıkan ürün yüklenemedi.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(featuredProduct));
    toast.success(`${featuredProduct.title} sepete eklendi!`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={featuredProduct.image || "https://picsum.photos/300/450?random=1"} // Boyut 400x600 -> 300x450
            alt={featuredProduct.title || "Person on Scooter"}
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
              src={featuredProduct.image || "https://picsum.photos/200/150?random=2"} // Boyut 300x200 -> 200x150
              alt={featuredProduct.title || "Meat Product"}
              className="rounded max-w-full max-h-[150px] object-cover mb-4"
            />

            <p className="text-gray-900 font-medium">{featuredProduct.title || "English Department"}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 line-through">
                ${featuredProduct.originalPrice?.toFixed(2) || "16.48"}
              </span>
              <span className="text-green-600 font-semibold">
                ${featuredProduct.price?.toFixed(2) || "6.48"}
              </span>
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

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">1.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">2.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">3.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">4.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}