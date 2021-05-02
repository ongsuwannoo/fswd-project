import { useLazyQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../../components/Loading/Loading";
import OrderCard from "../../components/orderCard/orderCard"
import { PRODUCT_QUERY } from "../../graphql/Product";

function Checkout() {
    const { productId } = useParams()
    const [product, setNewProduct] = useState({})
    const [getProduct, { loading }] = useLazyQuery(PRODUCT_QUERY, {
        variables: { productId },
        onCompleted: data => {
            setNewProduct(data.productById)
        }
    });
    useEffect(() => {
        getProduct()
    }, [getProduct,productId,product]);


    const productSummary = useMemo(() => {
        if (loading) {
          return (
            <tr>
              <td>
                <Loading />
              </td>
            </tr>
          );
        }
        if (product) {
          return(
            console.log(product.name)
          )
        }
      }, [loading, product]);
    return (
        <div className="">
            <div className="flex justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold py-4 lg:py-12">การจัดส่งสินค้า</h2>
            </div>

            <div className="grid grid-cols-12 gap-x-4 pb-20">
                <div className="col-span-12 lg:col-span-8">
                    <hr></hr>
                    <div className="flex items-baseline gap-x-10 py-5">
                        <h3 className="text-xl">ที่อยู่การจัดส่ง</h3>
                        <div>
                            <input type="checkbox" className="border border-black checked:bg-black mr-2"></input>
                            <label>ที่อยู่ปัจจุบัน</label>
                        </div>
                    </div>
                    <form className="grid grid-cols-2 pr-10 gap-x-10">
                        <div className="pb-5">
                            <label className="font-light text-s">ชื่อ</label><br></br>
                            <input type="text" placeholder="กรอกชื่อ" className="border border-gray-400 p-2 w-full"></input>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">นามสกุล</label><br></br>
                            <input type="text" placeholder="กรอกนามสกุล" className="border border-gray-400 p-2 w-full"></input>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">เบอร์โทรศัพท์</label><br></br>
                            <input type="text" placeholder="กรอกเบอร์โทรศัพท์" className="border border-gray-400 p-2 w-full"></input>
                        </div>
                        <div></div>
                        <div className="pb-5">
                            <label className="font-light text-s">ที่อยู่</label><br></br>
                            <input type="text" placeholder="บ้านเลขที่ อาคาร/หมู่บ้าน" className="border border-gray-400 p-2 w-full"></input>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">รหัสไปรษณีย์</label><br></br>
                            <input type="text" placeholder="กรอกรหัสรหัสไปรษณีย์" className="border border-gray-400 p-2 w-full"></input>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">จังหวัด</label><br></br>
                            <select className="border border-gray-400 p-2 w-full">
                                <option>กรุณาเลือกจังหวัด</option>
                            </select>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">เขด/อำเภอ</label><br></br>
                            <select className="border border-gray-400 p-2 w-full">
                                <option>กรุณาเลือกเขด/อำเภอ</option>
                            </select>
                        </div>
                        <div className="pb-5">
                            <label className="font-light text-s">แขวง/ตำบล</label><br></br>
                            <select className="border border-gray-400 p-2 w-full">
                                <option>กรุณาเลือกแขวง/ตำบล</option>
                            </select>
                        </div>
                        <div></div>
                        <div></div>
                        <div className="flex justify-end">
                            <label className="bg-black text-white w-full py-2 rounded mt-3 px-2 text-center">
                                <Link to={`/payment/${productId}`}  onClick={()=>{window.location.href=`/payment/${productId}`}}>
                                    <button>ชำระเงิน</button>
                                </Link>
                            </label>
                        
                        </div>
                    </form>
                </div>

                {/* order summary */}
                <div className="col-span-12 mt-4 lg:col-span-4 px-2 lg:mt-0">
                    <div className="flex justify-between w-full bg-blue-600 p-3">
                        <h4 className="text-xs text-white font-semibold">สรุปคำสั่งซื้อ</h4>
                        <h4 className="text-xs font-light text-gray-100 underline hover:text-black px-2" type="button">แก้ไข</h4>
                    </div>
                    <div className="overflow-auto h-64 border border-gray-200 p-3">
                        <OrderCard data={product}/>
                    </div>
                    <div className="flex justify-between w-full bg-blue-600 p-3">
                        <h4 className="text-xs text-white font-semibold">สรุปยอดชำระเงิน</h4>
                    </div>
                    <div className="grid grid-cols-2 border border-gray-200 p-3">
                        <h6 className="text-xs font-semibold">ยอดรวม</h6>
                        <h6 className="text-xs font-semibold text-right">฿{product.price}</h6>
                        <h6 className="text-xs font-light pt-3">การจัดส่ง</h6>
                        <h6 className="text-xs font-light pt-3 text-right text-green-700">ฟรี</h6>
                        <div className="col-span-2 py-3"><hr></hr></div>
                        <h6 className="text-s font-semibold">ยอดชำระสุทธิ</h6>
                        <h6 className="text-s font-semibold text-blue-600 text-right">฿{product.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;