import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { fetchRoles } from "./redux/actions/roleActions";
import { verifyToken } from "./redux/actions/clientActions";
import { fetchCategories } from "./redux/actions/productActions";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPage";
import MainContactPage from "./pages/MainContactPage";
import PricingPage from "./pages/InnerPages/PricingPage";
import Blog from "./pages/Blog";
import ContactPage from "./pages/InnerPages/ContactPage";
import TeamPage from "./pages/InnerPages/TeamPage";
import UserProfile from "./components/UserProfile";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart"; // Cart component’ini import ettik

function AppContent() {
  const theme = useSelector((state) => state.client.theme);
  const roles = useSelector((state) => state.client.roles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roles.length === 0) dispatch(fetchRoles());
  }, [dispatch, roles]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Router>
        <PageContent>
          <div className="p-4 flex justify-between items-center">
            <ThemeSwitcher />
            <UserProfile />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={Signup} />
            {/* ProductDetail rotası önce gelmeli, daha spesifik */}
            <Route
              path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:id"
              component={ProductDetail}
            />
            {/* ShopPage rotası sonra, daha genel */}
            <Route path="/shop/:gender?/:categoryName?/:categoryId?" component={ShopPage} />
            <Route path="/cart" component={Cart} /> {/* Cart rotasını ekledik */}
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={MainContactPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/inner/contact" component={ContactPage} />
            <Route path="/inner/team" component={TeamPage} />
            <Route path="/inner/pricing" component={PricingPage} />
          </Switch>
        </PageContent>
      </Router>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;