const CartItem = () => {
    return (
        <div className="col-span-12 grid grid-cols-12">
            <div className="col-span-2">
                <span>สินค้า</span>
            </div>
            <div className="col-span-4">
                <p>รายละเอียดสินค้า</p>
            </div>
            <div className="col-span-2">
                <p>ราคาต่อชิ้น</p>
            </div>
            <div className="col-span-2">
                <p>จำนวน</p>
            </div>
            <div className="col-span-2">
                <p>ราคารวม</p>
            </div>
        </div>
    )
}
export default CartItem;