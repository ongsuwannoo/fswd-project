import { Link } from "react-router-dom";
function login() {
    return (
      <div className="container px-96 bg-gray-200">
        <div className="flex justify-center">
          <form>
            <div className="grid grid-cols-12">
              <h2 className="font-bold text-4xl col-span-12 text-center py-16">เข้าสู่ระบบ</h2>
              <p className="col-span-12" >ชื่อผู้ใช้งาน</p>
              <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรุณากรอกชื่อผู้ใช้งาน"></input>
              <div className="col-span-2 mb-4 py-2 px-4 bg-white">
                <span>Logo</span>
              </div>
              <p className="col-span-12" >รหัสผ่าน</p>
              <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรุณากรอกรหัสผ่าน"></input>
              <div className="col-span-2 mb-4 py-2 px-4 bg-white">
                <span>Logo</span>
              </div>
              <button className="col-span-12 bg-black text-white py-2 my-4">เข้าสู่ระบบ</button>
            </div>
            <div className="flex justify-center">
                <p className="py-4">ยังไม่เคยลงทะเบียน? <Link>ลงทะเบียน</Link></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default login;
  