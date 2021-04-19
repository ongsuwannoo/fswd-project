import React, { Fragment, Suspense } from 'react'
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav"

const Register = React.lazy(() => import('./Pages/Register/Register'))
const Home = React.lazy(() => import('./Pages/Home/Home'))
const Login = React.lazy(() => import('./Pages/Login/Login'))
const OrderDetail = React.lazy(() => import('./Pages/OrderDetail/orderId'))

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <Nav />
          <Suspense fallback="Loading ...">
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
          </Suspense>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
