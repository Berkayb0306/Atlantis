import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // ✅ API'den ürünleri çek
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);

        // ✅ Bestseller ürünleri belirle (örnek olarak ilk 4 ürünü alıyoruz)
        setBestsellers(response.data.slice(0, 4));

        // ✅ Featured ürünleri belirle (örnek olarak rastgele ürün seçiyoruz)
        setFeaturedProducts(response.data.slice(4, 6));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductContext.Provider value={{ products, bestsellers, featuredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
