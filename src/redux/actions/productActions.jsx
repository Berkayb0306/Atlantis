// Aksiyon türleri
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

// Kategorileri set et
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// Ürün listesini set et
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

// Toplam ürün sayısını set et
export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

// Fetch durumunu güncelle
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// Ürün sayfa başına gösterim limitini güncelle
export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

// Sayfalama offset değerini güncelle
export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

// Ürün filtresini set et
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Ürünleri API'den çekmek için Thunk Action Creator
export const fetchProducts = () => async (dispatch, getState) => {
  const { fetchState } = getState().product;

  // Eğer ürünler zaten yüklüyse tekrar çağırma
  if (fetchState === "FETCHED") return;

  dispatch(setFetchState("FETCHING"));

  try {
    const response = await fetch("https://workintech-fe-ecommerce.onrender.com/products"); // API URL'yi buraya ekle
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    dispatch(setProductList(data.products));
    dispatch(setTotal(data.total));
    dispatch(setFetchState("FETCHED"));

    console.log("Ürünler başarıyla yüklendi:", data.products);
  } catch (error) {
    console.error("Ürünler yüklenirken hata oluştu:", error);
    dispatch(setFetchState("FAILED"));
  }
};
