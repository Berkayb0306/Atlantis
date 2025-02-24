import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
