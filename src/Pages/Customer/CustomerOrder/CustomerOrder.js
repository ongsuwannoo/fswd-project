import CustomerOrders from "../../../components/CustomerOrders/CustomerOrders"
import CustomerSide from "../../../components/CustomerSide/CustomerSide"

const CustomerOrder = () =>{
    return(
        <div className="contanier px-32 mx-auto">
            <div className="grid grid-cols-12 gap-x-16">
                <CustomerSide></CustomerSide>
                <div className="col-span-9">
                    <h1 className="font-bold text-3xl py-8">รายการสั่งซื้อของฉัน</h1>
                    <CustomerOrders />
                    <CustomerOrders />
                    <CustomerOrders />
                </div>
                
            </div>
        </div>
    )
}
export default CustomerOrder;