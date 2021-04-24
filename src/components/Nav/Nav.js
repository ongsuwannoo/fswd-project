import { useSession } from '../../contexts/SessionContext'
import { Fragment, useMemo } from 'react'

import icart from "../../icon/shopping-cart-solid.svg"

function Nav() {
  const { loading, user, logout: handleLogout } = useSession();
  const userBox = useMemo(
    () => {
      if (loading) {
        return (
          <span className="Navbar-user">Loading ...</span>
        )
      }
      if (user) {
        return (
          <Fragment>
            <div className="col-span-2">
              <a href="Login">{user?.firstname + user?.lastname}</a>
            </div>
            <button className="Navbar-logout" type="button" onClick={handleLogout}>Logout</button>
          </Fragment>
        )
      }
      return (
        <div className="col-span-2">
          <a className="hover:text-blue-600" href="login">เข้าสู่ระบบ</a>
          <span> | </span>
          <a className="hover:text-blue-600" href="register">ลงทะเบียน</a>
        </div>
      )
    },
    [handleLogout, loading, user],
  )

  return (
    <nav className="">
      <div className="flex justify-between items-center gap-x-5 py-4 ">
        <a href="/"><h2 className=" text-2xl">Marketry</h2></a>
        <input className="flex-grow placeholder-gray-400 border border-gray-400 px-5" type="text" placeholder="Search for products" ></input>
        {userBox}
        <a className="col-span-1" href="cart">
          <img src={icart} alt="cartIcon" className="w-5"></img>
        </a>
      </div>
      <hr></hr>

      <div>
        <ul className="flex justify-center gap-x-20 py-2">
          <li><a className="hover:text-blue-600" href="/">หน้าแรก</a> </li>
          <li><a className="hover:text-blue-600" href="/product">สินค้าทั้งหมด</a> </li>
          <li><a className="hover:text-blue-600" href="/">เสื้อ</a> </li>
          <li><a className="hover:text-blue-600" href="/"> กางเกง</a></li>
          <li><a className="hover:text-blue-600" href="/">กระโปรง</a> </li>
          <li><a className="hover:text-blue-600" href="/">เครื่องประดับ</a> </li>
          <li><a className="hover:text-blue-600" href="promotions">โปรโมชัน</a></li>
        </ul>
      </div>
      <hr></hr>

    </nav>
  )

}
export default Nav;