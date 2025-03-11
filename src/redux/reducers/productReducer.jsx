import { SET_CATEGORIES, SET_FETCH_STATE } from "../actions/productActions";

const initialState = {
  categories: [], // Kategoriler
  fetchState: "NOT_FETCHED", // Fetch durumu
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default productReducer;
