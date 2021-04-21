import ProductCard from '../../components/productCard/ProductCard'

function Home(){
    return(
      <div className="container px-32">
        {/* latest Promotion */}
        <img src="https://via.placeholder.com/1800x500" className="mt-16" alt="latest promo"></img>
        <div className="flex justify-center py-5">
          <h2 className="uppercase text-3xl">Promotions</h2>
        </div>

        {/* promotions */}
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-3 px-2"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
          <div className="col-span-3 px-2"> <img src="https://via.placeholder.com/398x200" className="" alt="promo"></img></div>
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
      </div> 
    );
}

export default Home;