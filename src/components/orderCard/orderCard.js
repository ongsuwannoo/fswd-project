function OrderCard() {
    return (
        <div className="p-1">
            <div className="flex">
                <img src="https://via.placeholder.com/100x100" alt="productCart"></img>
                <div className="pl-3">
                    <h3 className="text-s">PHILIPS</h3>
                    <h6 className="text-xs font-light">เมาส์ ฟิลิปส์ รุ่น SPK7504 Wireless Mouse สีดำ</h6>
                    <div className="flex justify-between items-baseline pt-9">
                        <h6 className="text-x">฿550</h6>
                        <h6 className="text-xs font-light">จำนวน : 1</h6>
                    </div>
                </div>
            </div>
            <div className="pt-2"><hr></hr></div>
        </div>
    )
}
export default OrderCard;