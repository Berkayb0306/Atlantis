import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { fetchRoles } from "./redux/actions/roleActions"; // ✅ Rolleri çekmek için import edildi
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

function AppContent() {
  const theme = useSelector((state) => state.client.theme);
  const roles = useSelector((state) => state.client.roles); // ✅ Redux'tan roller state'ini al
  const dispatch = useDispatch();

  useEffect(() => {
    if (roles.length === 0) {
      dispatch(fetchRoles()); // ✅ Roller boşsa sadece o zaman çağır
    }
  }, [dispatch, roles]);

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen`}>
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
