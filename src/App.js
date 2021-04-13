import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./Pages/Register";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <li>
        <Link to="/Register">to Register</Link>
      </li>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
