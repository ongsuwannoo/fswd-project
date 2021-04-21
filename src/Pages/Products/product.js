import ProductCard from '../../components/productCard/ProductCard'

import inext from "../../icon/chevron-right-solid.svg"

function Product() {
    return (
        <div className="container px-32 ">
            {/* Filter */}
            <div className="flex items-center h-15 p-4 my-2 bg-gray-100 w-full">
                <h5 className="mx-2 px-5">แสดงตาม</h5>
                <button className="bg-white text-black mx-2 px-5 rounded border-2 border-black">ขายดี</button>
                <button className="bg-white text-black mx-2 px-5 rounded border-2 border-black">ล่าสุด</button>
                <button className="bg-white text-black mx-2 px-5 rounded border-2 border-black">ลดราคา</button>
                <select className="bg-white text-black mx-2 px-5 rounded border-2 border-black">
                    <option>ราคา</option>
                    <option value="mintomax">ราคาน้อยไปมาก</option>
                    <option value="maxtomin">ราคามากไปน้อย</option>
                </select>
            </div>
            {/* products */}
            <div className="grid grid-cols-12 my-8">
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
                <ProductCard span="col-span-3 px-4 mt-4" />
            </div>
            {/* pagination */}
            <div className="flex justify-center gap-x-5 py-4 ">
                <button name="first" type="submit">FIRST</button>
                <button name="pre" type="submit">
                    <img alt="pre" className="w-5 transform rotate-180" src={inext} />
                </button>
                <h1 className="text-l">1</h1>
                <button name="next" type="submit">
                <img alt="pre" className="w-5" src={inext} />
                </button>
                <button name="last" type="submit">LAST</button>
            </div>
        </div>
    )
}
export default Product;