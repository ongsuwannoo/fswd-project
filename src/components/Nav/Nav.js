import { useSession } from '../../contexts/SessionContext'
import { Fragment, useMemo } from 'react'

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
          <a href="login">เข้าสู่ระบบ</a>
          <span> | </span>
          <a href="register">ลงทะเบียน</a>
        </div>
      )
    },
    [handleLogout, loading, user],
  )

  return (
    <nav>
      <div className="grid grid-cols-12 gap-x-5 text-center py-4">
        <div className="col-span-1"></div>
        <a href="/"><h2 className="col-span-1 text-2xl">Marketry</h2></a>
        <input type="text" placeholder="Search for products" className="col-span-6 placeholder-gray-400"></input>
        {userBox}
        <a className="col-span-1" href="cart">cart</a>
        <div className="col-span-1"></div>
      </div>
      <hr></hr>

      <div>
        <ul className="grid grid-cols-12 gap-x-10 text-center py-2">
          <div className="col-span-3"></div>
          <li><a href="/" className="col-span-1">หน้าแรก</a> </li>
          <li><a href="/" className="col-span-1">เสื้อ</a> </li>
          <li><a href="/" className="col-span-1"> กางเกง</a></li>
          <li><a href="/" className="col-span-1">กระโปรง</a> </li>
          <li><a href="/" className="col-span-1">เครื่องประดับ</a> </li>
          <li><a href="promotions" className="col-span-1">โปรโมชัน</a></li>
          <div className="col-span-3"></div>
        </ul>
      </div>
      <hr></hr>

    </nav>
  )

}
export default Nav;