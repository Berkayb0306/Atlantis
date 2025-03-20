import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchProductById } from "../redux/actions/productActions";
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
    if (productId && (!product || product.id !== Number(productId))) {
      console.log("Fetching product with ID:", productId);
      dispatch(fetchProductById(productId));
    } else if (!productId) {
      console.error("productId is undefined, check URL or router settings");
    }
  }, [dispatch, productId, product]);

  console.log("Product from store:", product);
  console.log("Fetch state:", fetchState);

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

  if (!product || product.id !== Number(productId)) {
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
      <ProductDetailsView product={product} />
      <ProductDetailsTabs product={product} />
      <BestsellerProducts />
      <BrandLogos />
    </div>
  );
};

export default ProductDetail;