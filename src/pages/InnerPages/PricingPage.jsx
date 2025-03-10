import PricingCards from "../../components/PricingCards";
import PricingFAQs from "../../components/PricingFAQs";
import BrandLogos from "../../components/BrandLogos";

function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
      {/* Başlık */}
      <div className="text-center mb-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Pricing
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
          Simple Pricing
        </h1>
      </div>

      {/* İçerik Bileşenleri */}
      <div className="flex flex-col gap-6">
        <PricingCards />
        <BrandLogos />
        <PricingFAQs />
      </div>
    </div>
  );
}

export default PricingPage;
