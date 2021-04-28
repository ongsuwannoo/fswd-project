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
  products: [
    {
      type: String,
      ref: 'Product'
    }
  ],
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
  buy_get: { type: String},
  get_buy: { type: String},
  persent: { type: String}
})

const baseOptions = {
  inputType: {
    removeFields: ['timestamp'],
  },
}

export const PromotionModel = mongoose.model('Promotion', PromotionSchema)

export const PromotionTC = composeWithMongoose(PromotionModel, baseOptions)

export default PromotionModel
