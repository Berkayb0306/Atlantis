import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "../actions/productActions";

const initialState = {
  categories: [], // Ürün kategorileri
  productList: [], // Ürün listesi
  total: 0, // Toplam ürün sayısı
  limit: 25, // Sayfa başına ürün limiti (varsayılan 25)
  offset: 0, // Sayfalama için başlangıç noktası
  filter: "", // Ürünleri filtrelemek için
  fetchState: "NOT_FETCHED", // Veri çekme durumu ("NOT_FETCHED", "FETCHING", "FETCHED", "FAILED")
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };

    case SET_TOTAL:
      return { ...state, total: action.payload };

    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    case SET_LIMIT:
      return { ...state, limit: action.payload };

    case SET_OFFSET:
      return { ...state, offset: action.payload };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default productReducer;
