import Nav from '../../components/Nav/Nav'
import CartItem from '../../components/cartItem/CartItem'

const Cart = () => {
    return (
        <div className="container px-32 mx-auto">
            <Nav></Nav>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold py-12">ตะกร้าของคุณ</h1>
            </div>
            <div>
                {/* table header */}
                <div className="grid grid-cols-12">
                    <div className="col-span-8 grid grid-cols-12">
                        <div className="col-span-2 h-0">
                            <p>สินค้า</p>
                        </div>
                        <div className="col-span-4 flex justify-center ">
                            <p>รายละเอียดสินค้า</p>
                        </div>
                        <div className="col-span-2 flex justify-center ">
                            <p>ราคาต่อชิ้น</p>
                        </div>
                        <div className="col-span-2 flex justify-center ">
                            <p>จำนวน</p>
                        </div>
                        <div className="col-span-2 flex justify-center ">
                            <p>ราคารวม</p>
                        </div>
                        <CartItem/>
                    </div>

                    <div className="col-span-4 border border-black flex flex-col justify-center">
                        <div className="flex justify-between px-4 py-2">
                            <p>2 ชิ้น</p>
                            <p>฿1,100</p>
                        </div>
                        <div className="flex justify-between px-4 py-2">
                            <p>ส่วนลดพิเศษ</p>
                            <p>฿0</p>
                        </div>
                        <div className="flex justify-between px-4 py-2">
                            <p className="font-bold">จำนวนเงินทั้งหมด</p>
                            <p className="text-blue-500">฿1,100</p>
                        </div>
                        <button className="px-8 py-2 mx-4 bg-black text-white my-4">ดำเนินการชำระเงิน</button>
                    </div>                    
                </div>

            </div>
            <hr></hr>
            
        </div>
    )
}
export default Cart;