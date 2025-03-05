import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailsView from "../components/ProductDetailsView";
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import BestsellerProducts from "../components/BestsellerProducts";
import BrandLogos from "../components/BrandLogos";  
  

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        const data = res.data;
        setProduct({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          images: Array.isArray(data.images) && data.images.length > 0 ? data.images : [data.image || "/placeholder.jpg"],
          brand: data.brand || "Unknown",
          category: data.category || "N/A",
          reviews: data.rating?.count || 0,
          availability: "In Stock",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError("Ürün verisi alınamadı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Yeniden Dene
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
