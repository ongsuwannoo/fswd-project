import React, { Fragment, Suspense } from 'react'
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

const Register = React.lazy(() => import('./Pages/Register/Register'))
const Home = React.lazy(() => import('./Pages/Home/Home'))
const Login = React.lazy(() => import('./Pages/Login/Login'))
const OrderDetail = React.lazy(() => import('./Pages/OrderDetail/orderId'))
const AdminHandle = React.lazy(() => import('./Pages/Admin/AdminHandle'))
const Product = React.lazy(() => import('./Pages/Products/product'))
const Promotions = React.lazy(() => import('./Pages/Promotions/promotions'))
const Cart = React.lazy(() => import('./Pages/Cart/cart'))
const Customer = React.lazy(() => import('./Pages/Customer/CustomerHandle'))
const Checkout = React.lazy(() => import('./Pages/Checkout/checkout'))
const Payment = React.lazy(() => import('./Pages/Payment/payment'))

function App() {
  return (
    <Fragment>
      <Router>
        <div>
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
              <Route path="/admin">
                <AdminHandle />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/promotions">
                <Promotions />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/customer">
                <Customer />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
