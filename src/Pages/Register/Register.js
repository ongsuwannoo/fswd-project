function Register() {
  return (
    <div className="container px-96 bg-gray-200">
      <div className="flex justify-center">
        <form>
          <div className="grid grid-cols-12">
            <h2 className="font-bold text-4xl col-span-12 text-center py-16">ลงทะเบียน</h2>
            <p className="col-span-12" >ชื่อ</p>
            <input className="col-span-12 mb-4 py-2 pl-4 pr-24" type="text" placeholder="กรอกชื่อ"></input>
            <p className="col-span-12" >นามสกุล</p>
            <input className="col-span-12 mb-4 py-2 pl-4 pr-24" type="text" placeholder="กรอกนามสกุล"></input>
            <p className="col-span-12" >ชื่อผู้ใช้งาน</p>
            <input className="col-span-12 mb-4 py-2 pl-4 pr-24" type="text" placeholder="กรอกชื่อผู้ใช้งาน"></input>
            <p className="col-span-12" >รหัสผ่าน</p>
            <input className="col-span-12 mb-4 py-2 pl-4 pr-24" type="text" placeholder="กรอกรหัสผ่าน"></input>
            <button className="col-span-12 bg-black text-white py-2 my-4">ลงทะเบียน</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
