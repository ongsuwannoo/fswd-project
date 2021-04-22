const CustomerSide = () => {
    return (
        <div className="col-span-3 my-8" >
            <div className="flex flex-col border border-gray-300">
                <span className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer font-bold">บัญชีของฉัน</span>
                <span className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer">ข้อมูลของฉัน</span>
                <span className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer">ข้อมูลส่วนตัว</span>
                <hr></hr>
                <span className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer ">รายการสั่งซื้อของฉัน</span>
            </div>
        </div>
    )
}
export default CustomerSide