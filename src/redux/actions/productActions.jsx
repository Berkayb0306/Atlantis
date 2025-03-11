import axiosInstance from "../../utils/axiosInstance";

// Aksiyon türleri
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

// Kategorileri Redux Store'a kaydet
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// Fetch durumunu güncelle
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// Kategorileri API'den çekmek için Thunk Action
export const fetchCategories = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const response = await axiosInstance.get("/categories");

    if (!response.data) throw new Error("Kategori verisi alınamadı.");

    console.log("Kategoriler başarıyla yüklendi:", response.data); // ✅ Debug için

    dispatch(setCategories(response.data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Kategoriler yüklenirken hata oluştu:", error);
    dispatch(setFetchState("FAILED"));
  }
};
