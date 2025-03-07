import AboutHeader from "../../components/AboutHeader";
import AboutContent from "../../components/AboutContent";
import AboutTeam from "../../components/AboutTeam";
import BrandLogos from "../../components/BrandLogos";
import WorkWithUs from "../../components/WorkWithUs";

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <AboutHeader />

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4">
        <AboutContent />
      </div>

      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <AboutTeam />
          
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          
          <BrandLogos />
        </div>
      </div>
      <WorkWithUs />
    </div>
  );
}

export default AboutPage;