import React, { Suspense } from 'react'
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import AdminProduct from './AdminProduct/AdminProduct';
import AdminPromotion from './AdminPromotion/AdminPromotion';
import AdminDashboard from './Admin/AdminDashboard';

const Admin = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback="Loading ...">
      <Switch>
        <Route exact path={`${path}`}>
          <AdminDashboard />
        </Route>
        <Route path={`${path}/product`}>
          <AdminProduct />
        </Route>
        <Route path={`${path}/promotion`}>
          <AdminPromotion />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Admin;