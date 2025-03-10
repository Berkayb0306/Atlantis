import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Named import kullanın
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

// Middleware'leri tanımla
const middleware = [thunk, logger];

// Redux DevTools desteği için alternatif yöntem
const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
