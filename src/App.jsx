import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { fetchRoles } from "./redux/actions/roleActions";
import { verifyToken } from "./redux/actions/clientActions";
import { fetchCategories } from "./redux/actions/productActions"; // ✅ Kategorileri çekmek için import eklendi
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

function AppContent() {
  const theme = useSelector((state) => state.client.theme);
  const roles = useSelector((state) => state.client.roles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roles.length === 0) {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles]);

  // 🌙 Dark Mode'u HTML etiketine ekleyelim
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // ✅ Uygulama açıldığında token doğrulama
  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  // ✅ Uygulama açıldığında kategorileri çek
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Router>
        <PageContent>
          <div className="p-4">
            <ThemeSwitcher />
            <UserProfile />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={MainContactPage} />
            <Route path="/login" component={LoginPage} />

            {/* Inner Pages */}
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
