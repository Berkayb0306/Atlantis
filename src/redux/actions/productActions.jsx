import axiosInstance from "../../utils/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID";
export const SET_BESTSELLERS = "SET_BESTSELLERS";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories ?? [],
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products ?? [],
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total ?? 0,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setBestsellers = (bestsellers) => ({
  type: SET_BESTSELLERS,
  payload: bestsellers ?? [],
});

const fetchData = async (endpoint, errorMessage) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if (!response?.data || response.status < 200 || response.status >= 300) {
      throw new Error(errorMessage || `API error: Failed to fetch ${endpoint}`);
    }
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const data = await fetchData("/categories", "Failed to fetch categories.");
    dispatch(setCategories(data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};

const cleanProductData = (products) => {
  return (products ?? []).map((product, index) => ({
    id: product?.id ?? index,
    title: product?.name || "No Product Name",
    image: product?.images?.[0]?.url || "https://via.placeholder.com/150",
    images: product?.images || [],
    price: product?.price ?? 0,
    description: product?.description || "No description available.",
    category: product?.category?.name || "Unknown Category",
    sell_count: product?.sell_count ?? 0,
    stock: product?.stock ?? 0,
    store_id: product?.store_id ?? null,
    category_id: product?.category_id ?? null,
    rating: product?.rating ?? 0,
  }));
};

export const fetchProducts = (queryParams = "", limit = 25, offset = 0) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const params = new URLSearchParams(queryParams);
    params.append("limit", limit);
    params.append("offset", offset);
    const endpoint = `/products?${params.toString()}`;
    const data = await fetchData(endpoint, "Failed to fetch products.");
    dispatch(setProducts(cleanProductData(data.products)));
    dispatch(setTotal(data.total ?? data.products.length));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};

export const fetchProductById = (productId) => async (dispatch) => {
  if (!productId) {
    console.error("❌ Invalid product ID.");
    dispatch(setFetchState("FAILED"));
    return;
  }
  dispatch(setFetchState("FETCHING"));
  try {
    const data = await fetchData(`/products/${productId}`, `Failed to fetch product ${productId}.`);
    if (!data || Object.keys(data).length === 0) {
      throw new Error(`Product ${productId} not found.`);
    }
    const cleanedProduct = cleanProductData([data])[0];
    console.log("Fetched product:", cleanedProduct);
    dispatch({ type: FETCH_PRODUCT_BY_ID, payload: cleanedProduct });
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error(`❌ Error in fetchProductById: ${error.message}`);
    dispatch(setFetchState("FAILED"));
  }
};

export const fetchBestsellers = (limit = 8) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const params = new URLSearchParams();
    params.append("sort", "sell_count");
    params.append("order", "desc");
    params.append("limit", limit);
    const endpoint = `/products?${params.toString()}`;
    const data = await fetchData(endpoint, "Failed to fetch bestsellers.");
    dispatch(setBestsellers(cleanProductData(data.products)));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error(`❌ Error in fetchBestsellers: ${error.message}`);
    dispatch(setFetchState("FAILED"));
  }
};