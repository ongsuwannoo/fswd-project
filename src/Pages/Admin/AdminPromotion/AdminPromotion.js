import { Link, Switch, useRouteMatch } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader/AdminHeader"
import Sidebar from "../../../components/Sidebar/Sidebar"

const AdminPromotion = () => {
    
    const {path} = useRouteMatch()

    return(
        <div>
            <div id="admin_promotion" className="container px-16 mx-auto bg-blue-100">
                <div className="grid grid-cols-12 gap-x-12 gap-y-4">
                    <AdminHeader username="asdfghjk"/>
                    <div className="col-span-2">
                            <select className="px-4 py-2">
                            <option>สินค้าทั้งหมด</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                        <Link to={`${path}/promotioncreate`}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded"><i class="fas fa-plus-circle"></i> Add promotion</button>
                        </Link>
                        </div>
                </div>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}

export default AdminPromotion;