import {
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_TOTAL,
  SET_FETCH_STATE,
  FETCH_PRODUCT_BY_ID,
  SET_BESTSELLERS,
} from "../actions/productActions";

const FETCH_STATES = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialState = {
  categories: [],
  products: [],
  product: null,
  total: 0,
  bestsellers: [],
  fetchState: FETCH_STATES.NOT_FETCHED,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload || [] };

    case SET_PRODUCTS:
      return { ...state, products: action.payload || [] };

    case SET_TOTAL:
      return { ...state, total: action.payload || 0 };

    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
        error: action.payload === FETCH_STATES.FAILED ? action.error || "An error occurred" : null,
      };

    case FETCH_PRODUCT_BY_ID:
      if (!action.payload || Object.keys(action.payload).length === 0) {
        return {
          ...state,
          product: null,
          fetchState: FETCH_STATES.FAILED,
          error: "Product not found",
        };
      }
      return {
        ...state,
        product: action.payload,
        fetchState: FETCH_STATES.FETCHED,
        error: null,
      };

    case SET_BESTSELLERS:
      return { ...state, bestsellers: action.payload || [] };

    default:
      return state;
  }
};

export default productReducer;