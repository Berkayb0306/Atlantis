import axios from "axios";

// Axios'un merkezi yapılandırması
const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// Eğer localStorage'da token varsa, axios'un `Authorization` başlığına ekle
const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = token;
}

export default axiosInstance;
