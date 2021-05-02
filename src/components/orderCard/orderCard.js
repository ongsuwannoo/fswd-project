function OrderCard(props) {
    return (
        <div className="p-1">
            <div className="flex">
                <img src="https://via.placeholder.com/100x100" alt="productCart"></img>
                <div className="pl-3">
                    <h3 className="text-s">{props.data.name}</h3>
                    {console.log(props.data)}
                    <h6 className="text-xs font-light">{props.data.description}</h6>
                    <div className="flex justify-between items-baseline pt-9">
                        <h6 className="text-x">฿{props.data.price}</h6>
                        <h6 className="text-xs font-light">จำนวน : 1</h6>
                    </div>
                </div>
            </div>
            <div className="pt-2"><hr></hr></div>
        </div>
    )
}
export default OrderCard;