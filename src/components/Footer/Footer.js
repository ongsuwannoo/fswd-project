import iig from '../../icon/instagram-brands.svg'
import ifacebook from '../../icon/facebook-square-brands.svg'
// import iline from '../../icon/line-brands.svg'
// import imail from '../../icon/envelope-regular.svg'
import itel from '../../icon/phone-alt-solid.svg'

function Footer() {
    return (
        <div className="flex flex-col items-center box-content h-20 py-4 bg-black text-white w-full">
            <div className="flex justify-center gap-x-5 py-1">
                <a href="https://www.instagram.com/kiddi.s/"><img src={iig} className="w-5" /></a>
                <a href="https://www.facebook.com/Kiddis-1517092321936942/"><img src={ifacebook} className="w-5 " /></a>
                {/* <a href=""><img src={iline} className="w-5 " /></a> */}
                {/* <a href="kiddi.bkk@gmail.com"><img src={imail} className="w-5 " /></a> */}
                <img src={itel} className="w-5 " />
                <p>0933297883</p>
            </div>
            <div className="flex justify-center text-center">
                <p className="text-xs">KIDDI (คิดดิ) ทางแบรนด์เป็นสินค้าแบรนด์ จากคนไทย ผลิตที่ประเทศไทยทุกชิ้น  <br></br>
            มีการเสียภาษีอย่างถูกต้อง Store 📍(หน้าร้าน) Asap Siam Square​ Soi 3
            </p>
            </div>
        </div>
    )

}
export default Footer;