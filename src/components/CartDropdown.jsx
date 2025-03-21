// src/components/CartDropdown.jsx
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types"; // PropTypes’ı import ediyoruz

const CartDropdown = ({ onClose }) => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cart);

  // Toplam ürün sayısını hesapla
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-10">
      {/* Başlık */}
      <h3 className="text-lg font-semibold mb-4">
        Sepetim ({totalItems} Ürün)
      </h3>

      {/* Sepet Boşsa */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş.</p>
      ) : (
        <>
          {/* Ürün Listesi */}
          <div className="max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 mb-4 border-b pb-2"
              >
                {/* Ürün Görseli */}
                <img
                  src={item.product.image || "https://via.placeholder.com/50"}
                  alt={item.product.title}
                  className="w-12 h-12 object-contain rounded"
                />
                {/* Ürün Bilgileri */}
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.product.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.count} Adet - {item.product.price} TL
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Butonlar */}
          <div className="mt-4">
            <button
              onClick={() => {
                history.push("/cart");
                onClose(); // Dropdown’ı kapat
              }}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Sepete Git
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// PropTypes ile props’ları tanımlıyoruz
CartDropdown.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose bir fonksiyon olmalı ve zorunlu
};

export default CartDropdown;