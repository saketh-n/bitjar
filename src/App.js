import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Party from "./pages/party";
import Invest from "./pages/invest";
import Collect from "./pages/collect";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/party">
            <Party />
          </Route>
          <Route exact path="/invest">
            <Invest />
          </Route>
          <Route exact path="/collect">
            <Collect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
