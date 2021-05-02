import {  Link, useRouteMatch } from 'react-router-dom'


const CustomerSide = () => {
    let { path, url } = useRouteMatch();

    const justLog = () => {
        console.log('URL' + url)
        console.log('Path' + path)
    }
    return (
        <div className="col-span-3 my-8" >
            <div className="flex flex-col border border-gray-300">
                <span className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer font-bold text-xs lg:text-base" onClick={justLog}>บัญชีของฉัน</span>
                <Link to='/customer' className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer text-xs lg:text-base">ข้อมูลของฉัน</Link>
                <hr></hr>
                <Link to='/customer/order'className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer text-xs lg:text-base">รายการสั่งซื้อของฉัน</Link>
            </div>
        </div>
    )
}
export default CustomerSide