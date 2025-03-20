import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { removeFromCart, updateCartItemQuantity, clearCart } from "../redux/actions/cartActions";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const handleRemoveFromCart = (productId, productTitle) => {
    dispatch(removeFromCart(productId));
    toast.success(`${productTitle} sepetten kaldırıldı.`);
  };

  const handleUpdateQuantity = (productId, productTitle, newCount) => {
    dispatch(updateCartItemQuantity(productId, newCount));
    toast.success(`${productTitle} miktarı güncellendi.`);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Sepet temizlendi.");
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Sepetim</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Sepetiniz boş.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <div>
          {/* Sepet Ürünleri */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center border-b py-4 gap-4"
              >
                {/* Ürün Görseli */}
                <img
                  src={
                    item.product.image ||
                    (item.product.images && item.product.images.length > 0
                      ? item.product.images[0].url
                      : "https://via.placeholder.com/100")
                  }
                  alt={item.product.title || item.product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                {/* Ürün Bilgileri */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.product.title || item.product.name || "Ürün Adı"}
                  </h2>
                  <p className="text-gray-600">
                    Birim Fiyat: {item.product.price.toFixed(2)} TL
                  </p>
                  <p className="text-gray-600">
                    Toplam: {(item.product.price * item.count).toFixed(2)} TL
                  </p>
                </div>
                {/* Miktar Kontrolü */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item.product.id,
                        item.product.title || item.product.name,
                        item.count - 1
                      )
                    }
                    className="p-1 border rounded-full hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg">{item.count}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item.product.id,
                        item.product.title || item.product.name,
                        item.count + 1
                      )
                    }
                    className="p-1 border rounded-full hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                {/* Sil Butonu */}
                <button
                  onClick={() =>
                    handleRemoveFromCart(
                      item.product.id,
                      item.product.title || item.product.name
                    )
                  }
                  className="p-2 text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Toplam ve İşlemler */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Sepeti Temizle
            </button>
            <div>
              <p className="text-xl font-bold">Toplam: {calculateTotal()} TL</p>
              <Link
                to="/checkout"
                className="mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Ödeme Yap
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;