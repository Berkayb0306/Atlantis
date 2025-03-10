import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail"; // ✅ Product Detail sayfasını içe aktar
import AboutPage from "./pages/AboutPage";
import MainContactPage from "./pages/MainContactPage";
import PricingPage from "./pages/InnerPages/PricingPage"; // ✅ MainContact sayfasını içe aktar
import Blog from "./pages/Blog";  

// Inner Pages Kategorisi (Tüm iç sayfalar buradan çekilecek)
import ContactPage from "./pages/InnerPages/ContactPage"; // ✅ Contact sayfasını doğru yere taşıdık
import TeamPage from "./pages/InnerPages/TeamPage"; // ✅ Team sayfasını doğru yere taşıdık
 // ✅ About sayfasını ekledik
{/*import PricingPage from "./pages/InnerPages/PricingPage"; // ✅ Pricing sayfasını ekledik */}

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={MainContactPage} />

          {/* Inner Pages için yeni yönlendirme yolları */}
          <Route path="/inner/contact" component={ContactPage} />
          <Route path="/inner/team" component={TeamPage} />
          <Route path="/inner/pricing" component={PricingPage} />
          
          {/*<Route path="/inner/pricing" component={PricingPage} />*/}
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
