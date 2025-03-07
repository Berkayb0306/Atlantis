import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "../components/Breadcrumb"; // ✅ Breadcrumb eklendi
import PropTypes from "prop-types";

const PageContent = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Breadcrumb tüm sayfalarda görünmesi için buraya eklendi */}
      <Breadcrumb /> 

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
