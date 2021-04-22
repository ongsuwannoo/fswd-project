const CartItem = () => {
    return (
        <div className="col-span-12 grid gap-5 grid-cols-12 py-5 border-t border-gray-300">
            <div className="col-span-2">
                <img src="http://placehold.it/200x200" className="border  border-gray-400" />
            </div>
            <div className="col-span-4">
                <h4 className="text-xl">lorem</h4>
                <p className="font-light text-sm py-3">เมาส์lorem pojfpw owjgowjgo wpogjowrjgo jrg orejgoegj oejrg</p>
            </div>
            <div className="col-span-2  text-center">
                <p className="text-l text-xl font-light text-gray-400 line-through">฿1,234</p>
                <p className="text-l text-xl font-light">฿500</p>
            </div>
            <div className="col-span-2 text-center">
                <input type="number" className="w-full px-2 py-1 text-center border border-gray-400 rounded"/>
                <p className="underline text-gray-400 font-light py-2">เอาออก</p>
            </div>
            <div className="col-span-2 text-center">
                <p className="text-l text-xl font-bold text-blue-500">฿500</p>
            </div>
        </div>
    )
}
export default CartItem;