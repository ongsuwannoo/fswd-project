import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import CreateUpdateProduct from '../AdminCreateUpdateProduct/AdminCreateUpdateProduct';
import { PRODUCT_QUERY_ALL } from '../../../graphql/Product'
import { useLazyQuery } from '@apollo/client'

const AdminProduct = () => {
  let { path } = useRouteMatch();
  const [products, setProducts] = useState();
  const [getProduct] = useLazyQuery(PRODUCT_QUERY_ALL, {
    onCompleted: async data => {
      console.log(data);
      setProducts(data.products)
    }
  });

  useEffect(() => {
    getProduct()
  }, [getProduct]);

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product ID</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tag</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Stock</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Sold</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products?.map((product, i) => {
            return (
              <tr key={i} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {product._id}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <img src={product.image[0]} width="100" height="100" />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {product.name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {product.tag.join()}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {product.count}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {product.count - 2}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {product.price}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  
                  {product.active
                  ? <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Active</span> 
                  : <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">Dedctive</span>}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                  <a href="#" ></a>
                  <Link to={`${path}/${product._id}`} className="text-blue-400 hover:text-blue-600 underline" >Edit</Link>
                  {/* <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a> */}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

const Admin = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <AdminProduct />
        </Route>
        <Route path={`${path}/create`}>
          <CreateUpdateProduct />
        </Route>
        <Route path={`${path}/:productId`}>
          <CreateUpdateProduct />
        </Route>
      </Switch>
    </div>
  )
}

export default Admin;