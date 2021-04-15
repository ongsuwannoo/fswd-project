
function ProductCard(numSpan){
    return(
        <div className={numSpan.span}>
            <img src="https://via.placeholder.com/398x500" class="" alt="productDetail"></img>
            <h3 className="px-2 text-3xl">Kurs Jacket</h3>
            <h4 className="px-2 text-opacity-70">รถขาไถ แลนด์โรเวอร์ สีน้ำเงิน</h4>
            <h5 className="px-2 text-2xl">฿550</h5>
            <h5 className="px-2 text-2xl"><span className="line-through">฿1250</span> <span className="text-red-500">Save ฿1400</span></h5>
            <div className="flex">
              <button className="bg-white text-black w-full mx-2 py-2 rounded border-2 border-black">cart</button>
              <button className="bg-black text-white w-full mx-2 py-2 rounded">ซื้อทันที</button>
            </div>
    </div>
    )
}
export default ProductCard