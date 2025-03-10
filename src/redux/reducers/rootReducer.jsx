import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

// Tüm reducer'ları tek bir yerde birleştir
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
