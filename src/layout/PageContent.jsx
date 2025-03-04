
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from 'prop-types';

const PageContent = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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