import { toast } from "react-toastify";
import gravatarUrl from "gravatar-url";
import axiosInstance from "../../utils/axiosInstance";

export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const VERIFY_USER = "VERIFY_USER";

// Kullanıcıyı Redux Store'a kaydet
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Kullanıcıyı çıkış yaptığında token ve header temizle
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
  return { type: LOGOUT_USER };
};

// Rolleri Redux Store'a ekle
export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

// Tema değişimini kaydet
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

// Dil değişimini kaydet
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

// Fetch state değişimini kaydet
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// Kullanıcı giriş işlemi
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });

    if (!response.data || !response.data.token) {
      throw new Error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }

    const { token, name, role_id } = response.data;
    const avatar = gravatarUrl(email, { size: 200, default: "identicon" });

    const userData = { name, email, role: role_id, token, avatar };

    dispatch(setUser(userData));

    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    axiosInstance.defaults.headers.common["Authorization"] = token;

    toast.success("Giriş başarılı!");
    return { success: true };
  } catch (error) {
    console.error("Giriş hatası:", error);
    toast.error(error.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
    return { success: false, message: error.message };
  }
};

// Kullanıcı doğrulama sonrası Redux Store'a ekleme
export const verifyUser = (user) => ({
  type: VERIFY_USER,
  payload: user,
});

// Token doğrulama işlemi (Uygulama açıldığında çalışır)
export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  axiosInstance.defaults.headers.common["Authorization"] = token;

  try {
    const response = await axiosInstance.get("/verify");

    if (!response.data || !response.data.email) {
      throw new Error("Token geçersiz.");
    }

    // Avatar kontrolü: Eğer backend avatar döndürmüyorsa Gravatar kullan
    const avatar = response.data.avatar || gravatarUrl(response.data.email, { size: 200, default: "identicon" });

    const userData = { ...response.data, avatar };

    dispatch(verifyUser(userData));

    localStorage.setItem("token", response.data.token);
    axiosInstance.defaults.headers.common["Authorization"] = response.data.token;

    toast.success("Otomatik giriş başarılı!");
  } catch (error) {
    console.error("Token doğrulama başarısız:", error);
    dispatch(logoutUser());
    toast.error("Oturum süresi doldu, tekrar giriş yapın.");
  }
};
