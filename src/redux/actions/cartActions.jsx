// Aksiyon türleri
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

// Sepeti güncelle
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

// Ödeme bilgisini güncelle
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

// Adres bilgisini güncelle
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
