import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail"; // Product Detail sayfasını içe aktar
import ContactPage from "./pages/ContactPage"; // Contact sayfasını içe aktar

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
