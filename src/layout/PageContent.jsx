import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "../components/Breadcrumb"; // ✅ Breadcrumb eklendi
import PropTypes from "prop-types";

const PageContent = ({ children }) => {
  const theme = useSelector((state) => state.client.theme); // Redux'tan temayı al

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header />
      
      {/* Breadcrumb tüm sayfalarda görünmesi için buraya eklendi */}
      <Breadcrumb /> 

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
