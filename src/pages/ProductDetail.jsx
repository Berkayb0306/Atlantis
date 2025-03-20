import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchProductById } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import toast from "react-hot-toast";
import ProductDetailsView from "../components/ProductDetailsView";
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import BestsellerProducts from "../components/BestsellerProducts";
import BrandLogos from "../components/BrandLogos";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector((state) => state.product.product);
  const fetchState = useSelector((state) => state.product.fetchState);
  const isLoading = fetchState === "FETCHING";
  const fetchError = fetchState === "FAILED";

  const productId = params.productId || params.id;

  useEffect(() => {
    console.log("All params:", params);
    if (!productId) {
      console.error("❌ productId is undefined, check URL or router settings");
      return;
    }

    const numericProductId = Number(productId);
    if (isNaN(numericProductId)) {
      console.error("❌ productId is not a valid number:", productId);
      return;
    }

    if (!product || product.id !== numericProductId) {
      console.log("Fetching product with ID:", numericProductId);
      dispatch(fetchProductById(numericProductId));
    }
  }, [dispatch, productId, product, params]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product.title} sepete eklendi!`);
      console.log("Ürün sepete eklendi:", product);
    }
  };

  console.log("Product from store:", product);
  console.log("Fetch state:", fetchState);

  if (!productId || isNaN(Number(productId))) {
    return (
      <div className="text-center text-red-500 py-6">
        <p>Geçersiz ürün ID’si.</p>
        <button
          onClick={() => history.goBack()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="text-center text-red-500 py-6">
        <p>Ürün yüklenirken bir hata oluştu.</p>
        <button
          onClick={() => history.goBack()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  const numericProductId = Number(productId);
  if (!product || product.id !== numericProductId) {
    return (
      <div className="text-center text-red-500 py-6">
        <p>Ürün bulunamadı.</p>
        <p>Debug: product = {JSON.stringify(product)}, productId = {productId}</p>
        <button
          onClick={() => history.goBack()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <button
        onClick={() => history.goBack()}
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Geri
      </button>
      <ProductDetailsView product={product} onAddToCart={handleAddToCart} />
      <ProductDetailsTabs product={product} />
      <BestsellerProducts />
      <BrandLogos />
    </div>
  );
};

export default ProductDetail;