import { useState } from "react";
import { useEffect } from "react";
import CustomerOrders from "../../../components/CustomerOrders/CustomerOrders";
import CustomerSide from "../../../components/CustomerSide/CustomerSide";
import OrderStatus from "../../../components/OrderStatus/OrderStatus";

const CustomerOrderDetail = () => {
    const {orderStatus, setOrderStatus} = useState(false)

    // useEffect(
    //     () => {
    //     if(!orderStatus){
    //         return 
    //     }
    //     }   
    // )
    return(
        <div className="grid grid-cols-12 gap-x-16">
                <CustomerSide></CustomerSide>
                <div className="col-span-9 my-8">
                    <div className="flex justify-between">
                        <div className="">
                        <i class="fas fa-chevron-left"></i> <span className="underline text-gray-400">ย้อนกลับ</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold">หมายเลขคำสั่งซื้อ: XD123456789</span>
                        </div>
                    </div>
                    {/* orderstatus */}
                    <OrderStatus status={false} />
                {/* address and product under order */}
                <div className="col-span-5">
                    <h3 className="text-3xl">ที่อยู่ในการจัดส่ง</h3>
                    <div className="py-8">
                        <p>name ตัวแปร เดี๋ยวมาใส่</p>
                        <p>ที่อยู่ในการจัดส่ง ตัวแปร</p>
                        <p>เบอร์โทร ตัวแปร</p>
                    </div>
                </div>
                <div className="col-span-7"></div>
                <div className="col-span-12">
                    <CustomerOrders status={false} />
                </div>
            </div>
        </div>
    )
}
export default CustomerOrderDetail;