function register() {
  return (
    <div className="container px-96 bg-gray-200">
      <div className="flex justify-center">
        <form>
          <div className="grid grid-cols-12">
            <h2 className="font-bold text-4xl col-span-12 text-center py-16">ลงทะเบียน</h2>
            <p className="col-span-12" >ชื่อ</p>
            <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรอกชื่อ"></input>
            <div className="col-span-2 mb-4 py-2 px-4 bg-white">
              <span>Logo</span>
            </div>
            <p className="col-span-12" >ชื่อ</p>
            <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรอกชื่อ"></input>
            <div className="col-span-2 mb-4 py-2 px-4 bg-white">
              <span>Logo</span>
            </div>
            <p className="col-span-12" >ชื่อ</p>
            <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรอกชื่อ"></input>
            <div className="col-span-2 mb-4 py-2 px-4 bg-white">
              <span>Logo</span>
            </div>
            <p className="col-span-12" >ชื่อ</p>
            <input className="col-span-10 mb-4 py-2 px-4" type="text" placeholder="กรอกชื่อ"></input>
            <div className="col-span-2 mb-4 py-2 px-4 bg-white">
              <span>Logo</span>
            </div>
            
            
            <button className="col-span-12 bg-black text-white py-2 my-4">ลงทะเบียน</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
