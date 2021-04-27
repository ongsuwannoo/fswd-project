import Customer from '../Customer/CustomerProfile/customer'
import CustomerOrder from '../Customer/CustomerOrder/CustomerOrder'
import {
    Route,
    Switch,
    useRouteMatch
  } from "react-router-dom";

const CustomerHandle = () => {
    let { path } = useRouteMatch();
    return(
        <Switch>
            <Route exact path={`${path}`}>
                <Customer></Customer>
            </Route>
            <Route path={`${path}/order`}>
                <CustomerOrder></CustomerOrder>
            </Route>
        </Switch>
    )
}
export default CustomerHandle