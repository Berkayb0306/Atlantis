import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import ProductDetailsView from "../components/ProductDetailsView";
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import BestsellerProducts from "../components/BestsellerProducts";
import BrandLogos from "../components/BrandLogos";
import { fetchProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Redux store'dan ürünleri al
  const products = useSelector(state => state.product.products);
  const existingProduct = products.find(p => String(p.id) === String(id));

  // Ürünü state içinde tut (ilk olarak Redux'tan, yoksa API'den çekeriz)
  const [product, setProduct] = useState(existingProduct || null);
  const [loading, setLoading] = useState(!existingProduct);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!existingProduct) {
      setLoading(true);
      setError(null);

      axiosInstance.get(`/products/${id}`)
        .then((res) => {
          const data = res.data;

          // 🔹 Görseli düzgün almak için kontrol
          const productImages = data.images && Array.isArray(data.images) && data.images.length > 0
            ? data.images.map(img => img.url) // API `images` array'inden URL'leri çek
            : [data.image || "https://via.placeholder.com/150"]; // Tekil `image` varsa kullan, yoksa placeholder

          const productData = {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            images: productImages, // ✅ Görseller düzeltildi
            brand: data.brand || "Unknown",
            category: data.category || "N/A",
            reviews: data.rating?.count || 0,
            availability: "In Stock",
          };

          setProduct(productData);
          localStorage.setItem(`product-${id}`, JSON.stringify(productData)); // ✅ Ürünü localStorage'a kaydet
          setLoading(false);
        })
        .catch((err) => {
          console.error("❌ Ürün verisi alınırken hata oluştu:", err);
          setError("Ürün verisi alınamadı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
          setLoading(false);
        });
    }
  }, [id, existingProduct]);

  // ✅ Sayfa yenilenince, localStorage'dan ürünü al
  useEffect(() => {
    if (!product) {
      const savedProduct = localStorage.getItem(`product-${id}`);
      if (savedProduct) {
        setProduct(JSON.parse(savedProduct));
      }
    }
  }, [id, product]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error || !product) {
    return (
      <div className="text-center text-red-500">
        <p>{error || "Ürün bulunamadı."}</p>
        <button onClick={() => dispatch(fetchProducts())} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Ürünleri Yeniden Yükle
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <ProductDetailsView product={product} />
      <ProductDetailsTabs product={product} />
      <BestsellerProducts />
      <BrandLogos />
    </div>
  );
};

export default ProductDetail;
