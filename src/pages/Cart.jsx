// src/pages/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom"; // useHistory eklendi
import toast from "react-hot-toast";
import { removeFromCart, updateCartItemQuantity, clearCart, toggleCartItemChecked } from "../redux/actions/cartActions";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Yönlendirme için useHistory
  const cartItems = useSelector((state) => state.cart.cart);
  const isAuthenticated = useSelector((state) => state.client.isAuthenticated); // Login durumu

  const handleRemoveFromCart = (productId, productTitle) => {
    dispatch(removeFromCart(productId));
    toast.success(`${productTitle} sepetten kaldırıldı.`);
  };

  const handleUpdateQuantity = (productId, productTitle, newCount) => {
    dispatch(updateCartItemQuantity(productId, newCount));
    toast.success(`${productTitle} miktarı güncellendi.`);
  };

  const handleToggleChecked = (productId) => {
    dispatch(toggleCartItemChecked(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Sepet temizlendi.");
  };

  // Seçili ürünlerin toplamını hesapla
  const calculateSelectedTotal = () => {
    return cartItems
      .filter((item) => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  };

  // Sipariş özeti için hesaplamalar
  const shippingFee = 29.99; // Sabit kargo ücreti
  const selectedTotal = parseFloat(calculateSelectedTotal());
  const discount = selectedTotal >= 150 ? shippingFee : 0; // 150 TL ve üzeri kargo bedava
  const grandTotal = (selectedTotal + shippingFee - discount).toFixed(2);

  // Sipariş Oluştur butonuna tıklanınca
  const handleCreateOrder = () => {
    if (isAuthenticated) {
      // Kullanıcı login olmuşsa, checkout sayfasına yönlendir
      history.push("/checkout");
    } else {
      // Kullanıcı login olmamışsa, login sayfasına yönlendir
      history.push("/login", { from: "cart" }); // Yönlendirme bilgisi ekliyoruz
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Sepetim ({cartItems.length} Ürün)</h1>
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
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sol Taraf: Ürün Tablosu */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-md shadow-md">
              {cartItems.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`p-4 ${index !== cartItems.length - 1 ? "border-b" : ""}`}
                >
                  {/* Satıcı ve Kargo Bilgisi */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleToggleChecked(item.product.id)}
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-semibold">
                        Satıcı: {item.product.store?.name || "Bilinmeyen Satıcı"} (9.7)
                      </span>
                      <span className="text-sm text-blue-500">Kurumsal</span>
                    </div>
                    <span className="text-sm text-green-500 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Kargo Bedava!
                    </span>
                  </div>

                  {/* Ürün Bilgileri */}
                  <div className="flex items-center gap-4">
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
                    <div className="flex-1">
                      <p className="text-lg font-semibold">
                        {item.product.title || item.product.name || "Ürün Adı"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.product.description || "Açıklama yok"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Beden: {item.product.size || "Bilinmiyor"}
                      </p>
                      <p className="text-sm text-gray-600">
                        39 dakikada sipariş verirsen en geç yarın kargoda!
                      </p>
                    </div>
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
                    <div className="text-right">
                      <p className="text-lg font-bold text-orange-500">
                        {(item.product.price * item.count).toFixed(2)} TL
                      </p>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(
                            item.product.id,
                            item.product.title || item.product.name
                          )
                        }
                        className="mt-2 p-2 text-gray-500 hover:text-red-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sepeti Temizle Butonu */}
            <div className="mt-6">
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>

          {/* Sağ Taraf: Sipariş Özeti */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-md shadow-md p-4 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-orange-500">Sipariş Özeti</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Ürün Toplamı</span>
                  <span>{selectedTotal} TL</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo Toplamı</span>
                  <span>{shippingFee.toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>150 TL ve Üzeri Kargo Bedava (Satıcı Karşılıyor)</span>
                  <span>-{discount.toFixed(2)} TL</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Toplam</span>
                    <span>{grandTotal} TL</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCreateOrder}
                className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Sipariş Oluştur
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;