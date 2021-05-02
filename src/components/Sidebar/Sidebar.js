import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [email, setEmail] = useState("ongsuwannoo_255556@gmail.com");
  const [isActive, setActive] = useState(false);
  const checkEmail = () => {
    console.log(email, isActive);
    if (email.length >= 25) {
      setEmail(email.substr(0, 24) + ".....");
    }
  };
  useEffect(() => {
    checkEmail();
  });

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive ? "-translate-x-full" : "-translate-x-0");
  };

  return (
    <>
      <div
        id=""
        class="bg-gray-800 text-gray-100 flex justify-between md:hidden"
      >
        <Link to="/admin">
          <div className="p-4">
            <i class="fas fa-home"></i> KIDDI
          </div>
        </Link>

        <button
          id="btn"
          onClick={toggleClass}
          class=" p-4 focus:outline-none focus:bg-gray-700"
        >
          <div>
            <i class="fas fa-bars"></i> Nav
          </div>
        </button>
      </div>

      <div
        id=""
        className={
          isActive
            ? "bg-gray-900 text-white w-80 xl:w-96  absolute inset-y-0 left-0 transform -translate-x-0 md:relative md:translate-x-0 transition duration-200 ease-in-out"
            : "bg-gray-900 text-white w-80 xl:w-96  absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
        }
      >
        <h1 className="font-bold text-2xl py-8 text-center">Marketry</h1>
        <h4 className="font-bold text-center">Jakkrapat Suwanno</h4>
        <h5 className="text-center text-xs">{email}</h5>
        <nav>
          <Link to="/admin">
            <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
              <i class="fas fa-home"></i> Home
            </div>
          </Link>
          <Link to="/admin/product">
            <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
              <i class="fas fa-box"></i> Product
            </div>
          </Link>
          <Link to="/admin/promotion">
            <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
              <i class="fas fa-dollar-sign"></i> Promotion
            </div>
          </Link>
          <Link to="/admin/order">
            <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
              <i class="fas fa-shopping-cart"></i> Order
            </div>
          </Link>
        </nav>
      </div>

      {/* <div id="admin_sidebar" className="bg-gray-900 text-white">
       <h1 className="font-bold text-2xl py-8 text-center">Marketry</h1>
       <h4 className="font-bold text-center">Jakkrapat Suwanno</h4>
       <h5 className="text-center text-xs">{email}</h5>
       <div className="mt-12">
         <Link to="/admin">
           <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
             <i class="fas fa-home"></i> Home
           </div>
         </Link>
         <Link to="/admin/product">
           <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
             <i class="fas fa-box"></i> Product
           </div>
         </Link>
         <Link to="/admin/promotion">
           <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
             <i class="fas fa-dollar-sign"></i> Promotion
           </div>
         </Link>
         <Link to="/admin/order">
           <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
             <i class="fas fa-shopping-cart"></i> Order
           </div>
         </Link>
       </div>
     </div> */}
    </>
  );
}
export default Sidebar;
