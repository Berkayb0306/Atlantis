import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ShopPage from "./pages/ShopPage";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <Router>
      <PageContent>
        <Breadcrumb />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;