const initialState = {
    cart: [], // Sepetteki ürünler
    payment: {}, // Ödeme bilgisi
    address: {}, // Adres bilgisi
  };
  
  // Aksiyon türleri
  const SET_CART = "SET_CART";
  const SET_PAYMENT = "SET_PAYMENT";
  const SET_ADDRESS = "SET_ADDRESS";
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return { ...state, cart: action.payload };
  
      case SET_PAYMENT:
        return { ...state, payment: action.payload };
  
      case SET_ADDRESS:
        return { ...state, address: action.payload };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  