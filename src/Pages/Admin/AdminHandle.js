import React from "react";
import {
    Route,
    Switch,
    useRouteMatch
  } from "react-router-dom";
import CreateProduct from './createproduct/createProduct';
import AdminDashboard from './Admin/AdminDashboard';

const Admin = () => {
    let { path, url } = useRouteMatch();
    return(
        <div>
            <Switch>
            <Route exact path={`${path}`}>
                <AdminDashboard />
            </Route>
            <Route path={`${path}/createproduct`}>
                <CreateProduct />
            </Route>
        </Switch>
        </div>
    )
}

export default Admin;