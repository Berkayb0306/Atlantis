// src/App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect, memo } from "react";
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
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

// AppContent bileşenini memo ile sararak gereksiz render’ları önleyelim
const AppContent = memo(() => {
  const theme = useSelector((state) => state.client.theme);
  const roles = useSelector((state) => state.client.roles);
  const dispatch = useDispatch();

  // Roller yüklenmediyse fetchRoles eylemini çalıştır
  useEffect(() => {
    if (!roles || roles.length === 0) {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles]);

  // Tema değiştiğinde dark sınıfını ekle/kaldır
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  // Token’ı doğrula (kullanıcı login durumunu kontrol et)
  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  // Kategorileri yükle
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Router>
        <PageContent>
          {/* Üst kısımda tema değiştirici ve kullanıcı profili */}
          <div className="p-4 flex justify-between items-center">
            <ThemeSwitcher />
            <UserProfile />
          </div>
          <Switch>
            {/* Ana sayfa */}
            <Route exact path="/" component={HomePage} />
            {/* Kayıt olma sayfası */}
            <Route path="/signup" component={Signup} />
            {/* ProductDetail rotası önce gelmeli, daha spesifik */}
            <Route
              path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:id"
              component={ProductDetail}
            />
            {/* ShopPage rotası sonra, daha genel */}
            <Route path="/shop/:gender?/:categoryName?/:categoryId?" component={ShopPage} />
            {/* Sepet sayfası */}
            <Route path="/cart" component={Cart} />
            {/* Checkout sayfası (korumalı rota) */}
            <ProtectedRoute path="/checkout" component={Checkout} />
            {/* Hakkında sayfası */}
            <Route path="/about" component={AboutPage} />
            {/* Blog sayfası */}
            <Route path="/blog" component={Blog} />
            {/* İletişim sayfası (ana) */}
            <Route path="/contact" component={MainContactPage} />
            {/* Giriş sayfası */}
            <Route path="/login" component={LoginPage} />
            {/* İç sayfalar */}
            <Route path="/inner/contact" component={ContactPage} />
            <Route path="/inner/team" component={TeamPage} />
            <Route path="/inner/pricing" component={PricingPage} />
          </Switch>
        </PageContent>
      </Router>
    </div>
  );
});

// AppContent için displayName tanımlıyoruz
AppContent.displayName = "AppContent";

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;