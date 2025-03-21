// src/utils/axiosInstance.jsx
import axios from "axios";

// Axios'un merkezi yapılandırması
const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// Her istekten önce token'ı kontrol et ve header'a ekle
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token; // Token'ı header'a ekle
    } else {
      delete config.headers.Authorization; // Token yoksa header'dan sil
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;