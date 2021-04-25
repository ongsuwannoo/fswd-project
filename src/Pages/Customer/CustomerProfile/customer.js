import Nav from '../../../components/Nav/Nav'
import CustomerSide from '../../../components/CustomerSide/CustomerSide'
const Customer = () => {
    return (
        <div className="contanier px-32 mx-auto">
            <Nav />
            <div className="grid grid-cols-12 gap-x-16">
                <CustomerSide />
                <div className="col-span-9">
                    <h1 className="text-center text-3xl py-8">ข้อมูลของฉัน</h1>
                    <div className="grid grid-cols-12 gap-x-8">
                        <div className="col-span-6 border border-gray-300 p-4">
                            <div className="flex justify-between">
                                <span className="font-bold">ข้อมูลส่วนตัว</span>
                                <span className="underline text-gray-400 font-light">แก้ไข</span>
                            </div>
                            <div className="grid grid-cols-12 pt-4">
                                <div className="col-span-4">
                                    <span>ชื่อ : </span>
                                </div>
                                <div className="col-span-8">
                                    <span>Jakkrapat Suwanno</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 pt-4">
                                <div className="col-span-4">
                                    <span>อีเมล์ : </span>
                                </div>
                                <div className="col-span-8">
                                    <span>ongsuwannoo@gmail.com</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 pt-4">
                                <div className="col-span-4">
                                    <span>เบอร์โทรศัพท์ : </span>
                                </div>
                                <div className="col-span-8">
                                    <span>0824200568</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 border border-gray-300 p-4">
                            <div className="flex justify-between">
                                <span className="font-bold">ที่อยู่จัดส่งปัจจุบัน</span>
                                <span className="underline text-gray-400 font-light">แก้ไข</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Customer;