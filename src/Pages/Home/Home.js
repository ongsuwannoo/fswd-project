import { useLazyQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router';
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/productCard/ProductCard'
import { PRODUCT_QUERY_ALL } from '../../graphql/Product';

function Home(){
  const [products, setProducts] = useState();
  const [getProduct, { loading, data }] = useLazyQuery(PRODUCT_QUERY_ALL);
  const {path} = useRouteMatch();
  useEffect(() => {
    if (data?.products) {
      console.log(data?.products);
      setProducts(data?.products)
    }
  },
    [data],
  )

  useEffect(
    () => {
      const loadData = async () => {
        try {
          await getProduct()
        } catch (err) {
          console.log("error get product");
        }
      }
      loadData()
    },
    [getProduct],
  )

  const onError = (e) => {
    e.target.src = 'https://via.placeholder.com/100x100'
  }

  const productCards = useMemo(
    () => {
      if (loading) {
        return (
          <tr><td><Loading /></td></tr>
        )
      }
      if (products) {
        return (
          products?.map((product, i) => {
            return(
                <ProductCard numSpan="col-span-3 px-4 mt-4" data={product} key={i}/>
            )
          })
          )}},[loading, products])
      return(
      <div className="">
        {/* latest Promotion */}
<<<<<<< HEAD
        <img src="https://via.placeholder.com/1800x500" className="mt-4 md:mt-16s" alt="latest promo"></img>
=======
        <img src="https://picsum.photos/1800/500/?1" className="mt-16" alt="latest promo"></img>
>>>>>>> main
        <div className="flex justify-center py-5">
          <h2 className="uppercase text-3xl">Promotions</h2>
        </div>

        {/* promotions */}
        <div className="grid grid-cols-12 mb-8">
<<<<<<< HEAD
          <div className="col-span-12 px-0 lg:col-span-3 lg:px-2 py-0.5"> <img src="https://via.placeholder.com/398x200" className="m" alt="promo"></img></div>
          <div className="col-span-12 px-0 lg:col-span-3 lg:px-2 py-0.5"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
          <div className="col-span-12 px-0 lg:col-span-3 lg:px-2 py-0.5"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
          <div className="col-span-12 px-0 lg:col-span-3 lg:px-2 py-0.5"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
=======
          <div className="col-span-3 px-2"> <img src="https://picsum.photos/398/200/?1" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://picsum.photos/398/200/?2" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://picsum.photos/398/200/?3" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://picsum.photos/398/200/?4" className="" alt="promo"></img></div>
>>>>>>> main
        </div>

        {/* products */}
        <div className="grid grid-cols-12 my-8">
<<<<<<< HEAD
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
          <ProductCard span="col-span-6 md:col-span-4 lg:col-span-3 px-4 mt-4" />
=======
          {productCards}
>>>>>>> main
        </div>
      </div> 
    );
}

export default Home;