import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const enumOrderStatus = ["Shipping", "Delivered", "Refunded", "Canceled"]
const OrderSchema = new Schema({
  order_id: {
    type: String,
    required: true
  },
  customer_id: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: enumOrderStatus,
  },
  product: [
    { type: String, }
  ],
  address: {
    name: { type: String },
    address: { type: String },
    province: { type: String },
    district: { type: String },
    sub_district: { type: String },
    postal_code: { type: String },
    phone: { type: String },
  },
  date: {
    type: Date,
    default: Date.now
  },
  payment_method: {
    type: String,
    default: "Pay On Delivery"
  },
})

export const OrderModel = mongoose.model('Order', OrderSchema)

export const OrderTC = composeWithMongoose(OrderModel)

export default OrderModel
