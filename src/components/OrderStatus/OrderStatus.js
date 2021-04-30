import { useMemo } from "react";

const OrderStatus = (props) => {
  const orderRender = useMemo(
    () => {
      if (props.status === false) {
        return (
          <div className="grid grid-cols-12 py-8 px-20 gap-y-8 ">
            <div className="col-span-3">
              <div className="order-i text-6xl text-red-500">
                <div className="border-4 border-red-500 rounded-full">
                  <i class="fas fa-money-bill-alt"></i>
                </div>
              </div>

            </div>
            <div className="flex col-span-6 justify-center items-center">
              <div className="bg-red-500 pt-1 w-11/12" id=""></div>
            </div>
            <div className="col-span-3">
              <div className="order-i text-6xl text-red-500">
                <div className="border-4 border-red-500 rounded-full">
                  <i class="fas fa-times-circle"></i>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex justify-center">
                <p>ชำระเงินแล้ว</p>
              </div>
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-3">
              <div className="flex justify-center">
                <p>ยกเลิกคำสั่งซื้อ</p>
              </div>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="grid grid-cols-12 py-8 px-20 gap-y-4 ">
            <div className="col-span-1">
              <div className="order-i text-xl text-green-500">
                <div className="border-4 border-green-500 rounded-full">
                  <i class="fas fa-money-bill-alt"></i>
                </div>
              </div>
            </div>
            <div className="flex col-span-5 justify-center items-center">
              <div className="bg-green-500 pt-1 w-11/12" id=""></div>
            </div>
            <div className="col-span-1">
              <div className="order-i text-xl text-green-500">
                <div className="border-4 border-green-500 rounded-full">
                  <i class="fas fa-truck-moving"></i>
                </div>
              </div>
            </div>
            <div className="flex col-span-4 justify-center items-center">
              <div className="bg-green-500 pt-1 w-11/12" id=""></div>
            </div>
            <div className="col-span-1">
              <div className="order-i text-xl text-green-500">
                <div className="border-4 border-green-500 rounded-full">
                  <i class="fas fa-hand-holding"></i>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="text-xs">ชำระเงินแล้ว</p>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-1 flex justify-center">
              <p className="text-xs">ที่ต้องจัดส่ง</p>
            </div>
            <div className="col-span-4"></div>
            <div className="col-span-1 flex justify-center">
              <p className="text-xs">ที่ต้องได้รับ</p>
            </div>

          </div>
        )
      }

    }
  )
  return (
    <div className="col-span-12">
      {orderRender}
    </div>
  )
}

export default OrderStatus;