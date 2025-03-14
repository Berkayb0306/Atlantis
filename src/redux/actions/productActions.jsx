import axiosInstance from "../../utils/axiosInstance";

// Aksiyon türleri
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

// **Kategorileri Redux Store'a kaydet**
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories ?? [],
});

// **Ürünleri Redux Store'a kaydet**
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products ?? [],
});

// **Toplam ürün sayısını Redux Store'a kaydet**
export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total ?? 0,
});

// **Fetch durumunu güncelle**
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// **API'den veri çekme fonksiyonu**
const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if (!response?.data || response.status !== 200) {
      throw new Error(`API hatası: ${endpoint} verisi alınamadı.`);
    }
    return response.data;
  } catch (error) {
    console.error(`❌ ${endpoint} yüklenirken hata oluştu:`, error);
    throw error;
  }
};

// **Kategorileri API'den çekmek için Thunk Action**
export const fetchCategories = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const data = await fetchData("/categories");
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Kategori listesi boş.");
    }
    dispatch(setCategories(data));
    dispatch(setFetchState("FETCHED"));
    console.log("✅ Kategoriler başarıyla yüklendi:", data);
  } catch {
    dispatch(setFetchState("FAILED"));
  }
};

// **Ürünleri temizleme fonksiyonu**
const cleanProductData = (products) => {
  return products.map((product, index) => {
    return {
      id: product.id ?? index,
      title: product.title?.trim() || product.name || "Ürün Başlığı Yok",
      image:
        product.image?.url ||
        (product.images?.length > 0 ? product.images[0].url : null) ||
        product.thumbnail ||
        "https://via.placeholder.com/150",
      price: product.price ?? 0,
      description: product.description || "Açıklama mevcut değil.",
      category: product.category || "Bilinmeyen Kategori",
    };
  });
};

// **Ürünleri API'den çekmek için Thunk Action (Pagination ve Infinite Scroll destekli)**
export const fetchProducts = (queryParams = "", limit = 25, offset = 0) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const params = new URLSearchParams(queryParams);
    params.append("limit", limit);
    params.append("offset", offset);
    
    const endpoint = `/products?${params.toString()}`;
    const data = await fetchData(endpoint);
    if (!data?.products || !Array.isArray(data.products)) {
      throw new Error("API'den gelen ürün verisi hatalı.");
    }

    const productsData = cleanProductData(data.products);
    const totalProducts = data.total ?? productsData.length;

    dispatch(setProducts(productsData));
    dispatch(setTotal(totalProducts));
    dispatch(setFetchState("FETCHED"));

    console.log("✅ Ürünler başarıyla yüklendi:", productsData);
  } catch {
    dispatch(setFetchState("FAILED"));
  }
};
