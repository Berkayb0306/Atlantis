import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail"; // ✅ Product Detail sayfasını içe aktar

// Inner Pages Kategorisi (Tüm iç sayfalar buradan çekilecek)
import ContactPage from "./pages/InnerPages/ContactPage"; // ✅ Contact sayfasını doğru yere taşıdık
import TeamPage from "./pages/InnerPages/TeamPage"; // ✅ Team sayfasını doğru yere taşıdık
import AboutPage from "./pages/InnerPages/AboutPage"; // ✅ About sayfasını ekledik
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

          {/* Inner Pages için yeni yönlendirme yolları */}
          <Route path="/inner/contact" component={ContactPage} />
          <Route path="/inner/team" component={TeamPage} />
          <Route path="/inner/about" component={AboutPage} />
          {/*<Route path="/inner/pricing" component={PricingPage} />*/}
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
