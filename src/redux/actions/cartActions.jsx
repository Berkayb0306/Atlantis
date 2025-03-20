// src/redux/actions/cartActions.js
import { ADD_TO_CART } from "../reducers/cartReducer";

// Aksiyon türleri
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

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

// Ürünü sepete ekle
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Ürünü sepetten sil
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Ürün miktarını güncelle
export const updateCartItemQuantity = (productId, count) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, count },
});

// Sepeti temizle
export const clearCart = () => ({
  type: CLEAR_CART,
});