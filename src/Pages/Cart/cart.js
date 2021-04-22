import Nav from "../../components/Nav/Nav"
import CartCard from "../../components/CartCard/CartCard"

function Cart() {
    return (
        <div className="container px-32">
            <Nav />
            <div className="flex justify-center py-5">
                <h2 className="text-3xl font-bold">ตระกร้าของคุณ</h2>
            </div>

            <div className="grid grid-cols-9 pt-5 pb-20">
                <div className="col-span-9">
                    <div className="grid grid-cols-9 text-xl font-light">
                        <p className="col-span-4">สินค้า</p>
                        <p>ราคาต่อชิ้น</p>
                        <p>จำนวน</p>
                        <p className="col-span-3">ราคารวม</p>
                    </div>
                </div>
                <div className="col-span-7">
                    <CartCard />
                    <CartCard />

                </div>
                {/* checkout */}
                <div className="col-span-2 pt-5 px-2">
                    <div className="grid grid-cols-2 border border-gray-200 p-3">
                            <h6 className="text-s font-light pt-3">2 ชิ้น</h6>
                            <h6 className="text-s font-light pt-3 text-right">฿1,100</h6>
                            <h6 className="text-s font-light pt-3">ส่วนลดพิเศษ</h6>
                            <h6 className="text-s font-light pt-3 text-right">฿0</h6>
                            <h6 className="text-s font-semibold pt-3">จำนวนเงินทั้งหมด</h6>
                            <h6 className="text-s font-semibold text-blue-600 pt-3 text-right">฿1,100</h6>
                            <button className="col-span-2 bg-black text-white w-full py-2 rounded mt-3">ดำเนินการชำระเงิน</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart