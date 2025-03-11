import { SET_CATEGORIES, SET_PRODUCTS, SET_TOTAL, SET_FETCH_STATE } from "../actions/productActions";

const initialState = {
  categories: [],
  products: [],
  total: 0,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_TOTAL:
      return { ...state, total: action.payload || 0 };

    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default productReducer;
