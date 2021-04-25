import React, { Suspense } from 'react'
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import AdminProduct from './AdminProduct/AdminProduct';
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
      </Switch>
    </Suspense>
  )
}

export default Admin;