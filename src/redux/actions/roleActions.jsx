import { SET_ROLES } from "./clientActions";

// Fetch state için action type ekleyelim
export const SET_FETCH_STATE = "SET_FETCH_STATE";

// Kullanıcı rollerini çekmek için Thunk Action Creator
export const fetchRoles = () => async (dispatch, getState) => {
  // Eğer roller zaten yüklendiyse tekrar çekme
  const { roles } = getState().client;
  if (roles.length > 0) return;

  dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

  try {
    const response = await fetch("https://workintech-fe-ecommerce.onrender.com/roles");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    dispatch({ type: SET_ROLES, payload: data });
    dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });

    console.log("Roller başarıyla yüklendi:", data); // Konsolda kontrol edelim
  } catch (error) {
    console.error("Roller yüklenirken hata oluştu:", error);
    dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
  }
};
