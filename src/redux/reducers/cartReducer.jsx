// src/redux/reducers/cartReducer.js

// Action türleri
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const TOGGLE_CART_ITEM_CHECKED = "TOGGLE_CART_ITEM_CHECKED"; // Yeni action türü

// Initial state
const initialState = {
  cart: [], // Sepetteki ürünler
  payment: {}, // Ödeme bilgisi
  address: {}, // Adres bilgisi
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // Ürün sepette varsa, count'u artır
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        // Ürün sepette yoksa, yeni bir entry ekle
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== productId),
      };
    }

    case UPDATE_CART_ITEM_QUANTITY: {
      const { productId, count } = action.payload;
      if (count <= 0) {
        // Eğer count 0 veya negatifse, ürünü sepetten sil
        return {
          ...state,
          cart: state.cart.filter((item) => item.product.id !== productId),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId ? { ...item, count } : item
        ),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case TOGGLE_CART_ITEM_CHECKED: {
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;