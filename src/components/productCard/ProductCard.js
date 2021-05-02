import icartadd from "../../icon/cart-plus-solid.svg"
import { Link, Switch, useRouteMatch } from "react-router-dom";

function ProductCard(props) {
  const onError = (e) => {
    e.target.src = 'https://via.placeholder.com/398x500'
  }
  return (
    <div className={props.numSpan}>
      <Link to={`/product/detail/${props.data?._id}`}>
      <img src={`https://picsum.photos/398/500/?${Math.random()}`} onError={onError} className="" alt="productDetail" width="398" height="500"></img>
      <h3 className="px-2 text-xl lg:text-2xl">{props.data?.name}</h3>
      <h4 className="px-2 text-opacity-70">{props.data?.description}</h4>
      <h5 className="px-2 text-xl lg:text-2xl">{props.data?.price}</h5>
      <div className="flex">
        <button className="bg-white text-black w-full mx-2 py-2 rounded border-2 border-black flex justify-center">
          <img src={icartadd} className="w-5" alt="card"/>
        </button>
        <button className="text-xs md:text-ms lg:text-base bg-black text-white w-full mx-2 py-2 rounded">ซื้อทันที</button>
      </div>
      </Link>
    </div>
  )
}
export default ProductCard