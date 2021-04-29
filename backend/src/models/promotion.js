import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const enumType = ["Free", "Sale"]

const PromotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: enumType
  },
  banner: [
    { type: String }
  ],
  product: {
    type: String,
  }
  ,
  start_date: {
    type: String
  },
  start_time: {
    type: String
  },
  end_date: {
    type: String
  },
  end_time: {
    type: String
  },
  active: {
    type: Boolean
  },
  buy_get: { type: Number, default: 0 },
  get_buy: { type: Number, default: 0 },
  persent: { type: Number, default: 0}
})

const baseOptions = {
  inputType: {
    removeFields: ['timestamp'],
  },
}

export const PromotionModel = mongoose.model('Promotion', PromotionSchema)

export const PromotionTC = composeWithMongoose(PromotionModel, baseOptions)

export default PromotionModel
