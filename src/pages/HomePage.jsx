import Slider from "../components/Slider";
import AdBanner from "../components/AdBanner";
import ProductShowcase  from "../components/ProductShowcase";
import ProductShowcase2  from "../components/ProductShowcase2";
import FeaturedProduct from "../components/FeaturedProduct";
import FeaturedProduct2 from "../components/FeaturedProduct2";
import BestsellerProducts from "../components/BestsellerProducts";
import BrandLogos from "../components/BrandLogos";
import FeaturedPosts from "../components/FeaturedPosts";



const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Store</h1>
      
    
      <div className="w-full max-w-4xl mb-8">
        <Slider />
      </div>

   
      <AdBanner />

     
      <ProductShowcase />

    
      <FeaturedProduct />

      <ProductShowcase2 />

      <FeaturedProduct2 />

      <BestsellerProducts />

      <BrandLogos />

      <FeaturedPosts />
      
      
    </div>
  );
};

export default HomePage;
