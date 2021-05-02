import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../../components/productCard/ProductCard";
import Loading from '../../../components/Loading/Loading'
import { PRODUCT_QUERY } from "../../../graphql/Product";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductDetail(props) {
  const { productId } = useParams()
  const [product, setNewProduct] = useState({})
  const [image, setImage] = useState([])
  const [imageIndex, setImageIndex] = useState(0)
  const [getProduct, { loading }] = useLazyQuery(PRODUCT_QUERY, {
    variables: { productId },
    onCompleted: data => {
      setNewProduct(data.productById)
      console.log(data.productById.image[0]);
      setImage(data.productById.image)
    }
  });
  useEffect(() => {
    getProduct()

  }, [getProduct]);


  return (
    <div className="">
      {loading ? <Loading /> : ''}
      <div className="grid grid-cols-12 mt-16">
        <div className="col-span-1 flex flex-col justify-center items-center">
          
          {image.map((data, index) => {
            return (
              <>
                <div
                  class="image_product cursor-pointer mb-4 border-0 hover:border-black hover:border-2"
                  alt="gallery image1"
                  style={{ '--img': `url(${data})`}}
                  onClick={() => setImageIndex(index)}
                >
                  
                </div>
              </>
            )
          })}
        </div>
        <div className="col-span-5 px-4">
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex justify-center items-center">
                <div className="cursor-pointer" onClick={() => setImageIndex(imageIndex - 1)}><i className="fas fa-chevron-left"></i></div>
              </div>
              <div id="image_product" className="col-span-8 image_product" alt="showing" style={{ '--img': `url(${image[imageIndex]})` }}>
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <div className="cursor-pointer" onClick={() => setImageIndex(imageIndex + 1)}><i className="fas fa-chevron-right"></i></div>
              </div>
            </div>
          </div>
          <div className="col-span-6 px-4">
            <div>
              <h1 className="uppercase font-bold text-4xl">{product.name}</h1>
              <h3 className="py-4">
                {product.description}
              </h3>
              <h5 className="text-blue-600 text-2xl">฿{product.price}</h5>
              <div className="grid grid-cols-12 py-8">
                <input
                  className="col-span-4 py-1 mx-2 text-center border border-black hover:border-2"
                  type="number"
                  name=""
                  id=""
                ></input>
                <button className="col-span-4 py-1 mx-2 bg-white text-black border border-black">
                  cart
              </button>
                <label className="col-span-4 py-1 mx-2 bg-black text-white border border-black text-center">
                  <Link to={`/checkout/${productId}`} onClick={() => { window.location.href = `/checkout/${productId}` }}>
                    <button>
                      ซื้อทันที
                  </button>
                  </Link>
                </label>

              </div>
            </div>
          </div>
        </div>
        {/* end of image and basic order detail here */}
        {/* now description of product start */}
        <h2 className="pt-16">Details</h2>
        <hr></hr>
        <p>
          {product.details}
        </p>
        {/* end of description here */}
        {/* recommended item here */}

      </div>
  );
}
export default ProductDetail;
