import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import OrderDetail from "./Pages/OrderDetail/orderId"
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product/:productSlug">
            <OrderDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
