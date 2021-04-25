const CustomerOrders = () => {
  return (
    <div>
      <hr></hr>
      <div className="grid grid-cols-12 gap-x-8 py-4">
        <div className="col-span-3">
          <img src="https://via.placeholder.com/200x200"></img>
        </div>
        <div className="col-span-7 flex flex-col justify-between">
          <div>
            <h2>Phillips</h2>
            <span>เมาส์ บลา บลา บลา บลา</span>
          </div>
          <p className="text-end">หมายเลขคำสั่งซื้อ: ใส่ตรงนี้งับ</p>
        </div>
        <div className="col-span-2 flex flex-col">
          <span className="line-through text-gray-400">฿1250</span>
          <span className="py-2">฿550</span>
        </div>
      </div>
    </div>
  );
};
export default CustomerOrders;
