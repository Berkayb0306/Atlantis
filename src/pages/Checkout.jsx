// src/pages/Checkout.jsx
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../utils/axiosInstance.jsx";
import toast from "react-hot-toast";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "", // Adres detayları (Street, building, door numbers) için kullanılacak
  });

  const cartItems = useSelector((state) => state.cart.cart);

  const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Adana", "Antalya"];

  const fetchAddresses = async () => {
    try {
      const response = await api.get("/user/address");
      const fetchedAddresses = response.data || [];
      console.log("Fetched Addresses:", fetchedAddresses);
      setAddresses(fetchedAddresses);
    } catch (error) {
      toast.error("Adresler alınırken bir hata oluştu.");
      console.error("Fetch Addresses Error:", error);
      setAddresses([]);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const calculateSelectedTotal = () => {
    return cartItems
      .filter((item) => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  };

  const shippingFee = 29.99;
  const selectedTotal = parseFloat(calculateSelectedTotal());
  const discount = selectedTotal >= 150 ? shippingFee : 0;
  const grandTotal = (selectedTotal + shippingFee - discount).toFixed(2);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/address", formData);
      setAddresses([...addresses, response.data]);
      toast.success("Adres başarıyla eklendi.");
      setShowAddressForm(false);
      setFormData({
        id: null,
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });
    } catch (error) {
      toast.error("Adres eklenirken bir hata oluştu.");
      console.error("Add Address Error:", error);
    }
  };

  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/user/address", {
        id: formData.id,
        ...formData,
      });
      setAddresses(
        addresses.map((address) =>
          address.id === formData.id ? response.data : address
        )
      );
      toast.success("Adres başarıyla güncellendi.");
      setShowAddressForm(false);
      setFormData({
        id: null,
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });
    } catch (error) {
      toast.error("Adres güncellenirken bir hata oluştu.");
      console.error("Update Address Error:", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await api.delete(`/user/address/${addressId}`);
      setAddresses(addresses.filter((address) => address.id !== addressId));
      toast.success("Adres başarıyla silindi.");
      if (selectedAddress?.id === addressId) setSelectedAddress(null);
      if (selectedBillingAddress?.id === addressId) setSelectedBillingAddress(null);
    } catch (error) {
      toast.error("Adres silinirken bir hata oluştu.");
      console.error("Delete Address Error:", error);
    }
  };

  const handleEditAddress = (address) => {
    setFormMode("edit");
    setFormData({
      id: address.id,
      title: address.title,
      name: address.name,
      surname: address.surname,
      phone: address.phone,
      city: address.city,
      district: address.district,
      neighborhood: address.neighborhood,
    });
    setShowAddressForm(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h2 className={`text-lg font-semibold ${step === 1 ? "text-orange-500" : "text-gray-500"}`}>
            1. Adres Bilgileri
          </h2>
          <div className="h-2 bg-orange-500 rounded" style={{ width: step === 1 ? "100%" : "50%" }}></div>
        </div>
        <div className="flex-1">
          <h2 className={`text-lg font-semibold ${step === 2 ? "text-orange-500" : "text-gray-500"}`}>
            2. Ödeme Seçenekleri
          </h2>
          <div className="h-2 bg-orange-500 rounded" style={{ width: step === 2 ? "100%" : "0%" }}></div>
        </div>
      </div>

      {step === 1 && (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-4">Teslimat Adresi</h3>
            <div className="space-y-4">
              {Array.isArray(addresses) && addresses.length > 0 ? (
                addresses.map((address, index) => (
                  <div
                    key={address.id || `address-${index}`}
                    className={`p-4 border rounded-md flex items-center justify-between ${
                      selectedAddress?.id === address.id ? "border-orange-500" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shippingAddress"
                        checked={selectedAddress?.id === address.id}
                        onChange={() => setSelectedAddress(address)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-semibold">{address.title}</p>
                        <p>
                          {address.name} {address.surname}
                        </p>
                        <p>{address.neighborhood}</p>
                        <p>
                          {address.district}, {address.city}
                        </p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditAddress(address)}
                        className="text-blue-500 hover:underline"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="text-red-500 hover:underline"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Kayıtlı adres bulunamadı.</p>
              )}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4">Fatura Adresi</h3>
            <div className="space-y-4">
              {Array.isArray(addresses) && addresses.length > 0 ? (
                addresses.map((address, index) => (
                  <div
                    key={address.id || `billing-address-${index}`}
                    className={`p-4 border rounded-md flex items-center justify-between ${
                      selectedBillingAddress?.id === address.id ? "border-orange-500" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="billingAddress"
                        checked={selectedBillingAddress?.id === address.id}
                        onChange={() => setSelectedBillingAddress(address)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-semibold">{address.title}</p>
                        <p>
                          {address.name} {address.surname}
                        </p>
                        <p>{address.neighborhood}</p>
                        <p>
                          {address.district}, {address.city}
                        </p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Kayıtlı adres bulunamadı.</p>
              )}
            </div>

            <button
              onClick={() => {
                setFormMode("add");
                setShowAddressForm(true);
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Yeni Adres Ekle
            </button>

            {showAddressForm && (
              <div className="mt-6 p-4 border rounded-md">
                <h3 className="text-lg font-semibold mb-4">
                  {formMode === "add" ? "Yeni Adres Ekle" : "Adresi Güncelle"}
                </h3>
                <form onSubmit={formMode === "add" ? handleAddAddress : handleUpdateAddress}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Adres Başlığı</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">İsim</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Soyisim</label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefon</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Şehir</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      >
                        <option value="">Şehir Seçin</option>
                        {cities.map((city) => (
                          <option key={city} value={city.toLowerCase()}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">İlçe</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Adres Detayları (Mahalle, Sokak, Bina ve Kapı No)</label>
                      <textarea
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        rows="3"
                        required
                        placeholder="Mahalle, sokak, bina ve kapı numarası gibi detayları girin"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      {formMode === "add" ? "Ekle" : "Güncelle"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddressForm(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

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
                onClick={() => setStep(2)}
                className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                disabled={!selectedAddress || !selectedBillingAddress}
              >
                Kaydet ve Devam Et
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Ödeme Seçenekleri</h3>
          <p>Bu bölüm bir sonraki görevde tamamlanacak.</p>
          <button
            onClick={() => setStep(1)}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Geri
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;