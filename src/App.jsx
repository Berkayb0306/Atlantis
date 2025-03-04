import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;