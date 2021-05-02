import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useLazyQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router'

import { USER_QUERY } from '../../../graphql/User'
// import { PRODUCT_QUERY_ALL } from '../../../graphql/Product'
import { ORDER_QUERY, UPDATE_ORDER } from '../../../graphql/Order'

// import { isNumeric } from '../../../utils/isNumeric'
// import { UploadForm } from '../../../components/UploadForm/UploadForm'
import { formatDate } from '../../../utils/formatDate'

import configData from "../../../config.json";

const AdminPromotion = () => {
  const ORDER_STATUS = configData.ADMIN.ORDER_STATUS
  const { orderId } = useParams();

  const history = useHistory()
  const [updateOrder] = useMutation(UPDATE_ORDER)

  const [order, setOrder] = useState({});
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  const [getOrder] = useLazyQuery(ORDER_QUERY, {
    variables: { orderId },
    onCompleted: async data => {
      console.log(data.orderById);
      setUserId(data.orderById.customer_id)
      setOrder(data.orderById)
      getUser()
    }
  });

  const [getUser] = useLazyQuery(USER_QUERY, {
    variables: { userId },
    onCompleted: async data => {
      console.log(data.userById);
      setUser(data.userById)
    }
  });

  // Get Order
  useEffect(() => {
    getOrder()
  }, [getOrder]);

  // setNewProduct from input, option, checkbox form
  // const handleInputChange = useCallback(
  //   (e) => {
  //     let { name, value } = e.target

  //     if (name === "active") value = e.target.checked

  //     if (isNumeric(value)) value = Number(value)

  //     setOrder((prev) => ({ ...prev, [name]: value }))
  //   },
  //   [],
  // )

  // Submit useMutation createProduct -> backend
  const handleSubmitCreate = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        console.log("Update Order");
        await updateOrder({ variables: { record: order, orderId } })
        alert('Update success')
        history.push('/admin/order')
      } catch (err) {
        console.log(err)
        alert('Update failed')
      }
    },
    [order, history, orderId, updateOrder],
  )

  return (
    <div className="bg-gray-100 h-screen">
      <div className="container px-16 flex pt-8 justify-between">
        <div className="flex flex-col">
          <h1 className="text-yellow-500 text-3xl">Update Promotion</h1>
          {/* Promotion Name */}
          <div className="flex mt-5">
            <label className="ml-3 text-gray-500">Customer</label>
            <label className="ml-3 text-blue-700">{user?.username}</label>
          </div>
          <div className="flex mt-5">
            <label className="ml-3 text-gray-500">Order Date</label>
            <label className="ml-3 text-blue-700">{formatDate(order?.date)}</label>
          </div>
          <div className="flex mt-5">
            <label className="ml-3 text-gray-500">Payment method</label>
            <label className="ml-3 text-blue-700">{order?.payment_method}</label>
          </div>
          <div className="flex mt-5">
            <label className="ml-3 text-gray-500">Delivery address</label>
          </div>
          <div className="flex mt-5 ml-9">
            <label className="ml-3 text-gray-500">Name</label>
            <label className="ml-3 text-blue-700">Name</label>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mr-96 mt-20">
          <label>Status Order</label>
          {ORDER_STATUS?.status.map((value, i) => {
            return (
              <label key={i} className="inline-flex items-center">
                <input type="radio" className="form-radio" name="type" value={value} />
                <span className="ml-2 mr-5">{value}</span>
              </label>
            )
          })}
          {/* Main save */}
          <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded w-max mb-5 mt-2">
            Save Product
          </button>
        </div>
      </div>
    </div>
  )
}
export default AdminPromotion;
