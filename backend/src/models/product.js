import mongoose from 'mongoose'
import {
  composeWithMongooseDiscriminators
} from 'graphql-compose-mongoose'

const { Schema } = mongoose

const DKey = 'type'
const enumProductType = {
  FREE: 'PromotionFree',
  SALE: 'PromotionSale',
  PRODUCT: 'Product'
}
const enumProductCategory = ["shirt", "pants", "skirt", "accessories"]
const enumProductColor = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: enumProductCategory,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  tag: [
    { type: String }
  ],
  image: [
    { type: String }
  ],
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  detail: {
    type: String
  },
  active: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    require: true,
    enum: Object.keys(enumProductType),
    index: true
  }
})

const PromotionSchema = new Schema({
  banner: [
    { type: String }
  ],
  start_date: {
    type: Date,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

const PromotionFreeSchema = new Schema({
  promotion: { type: [PromotionSchema], require: true },
  buy_get: {
    type: Number,
    default: 0,
    required: true,
  },
  get_buy: {
    type: Number,
    default: 0,
    required: true,
  }
})

const PromotionSaleSchema = new Schema({
  promotion: { type: [PromotionSchema], require: true },
  persent: {
    type: Number,
    default: 0,
    required: true,
  }
})

const ProductSchemaTC = new Schema({})

const discriminatorOptions = {
  inputType: {
    removeFields: ['timestamp'],
  }
}

ProductSchema.set('discriminatorKey', DKey)

export const ProductModel = mongoose.model('ProductPromotion', ProductSchema)
export const PromotionFreeModel = ProductModel.discriminator(enumProductType.FREE, PromotionFreeSchema)
export const PromotionSaleModel = ProductModel.discriminator(enumProductType.SALE, PromotionSaleSchema)
export const ProductModelTC = ProductModel.discriminator(enumProductType.PRODUCT, ProductSchemaTC)

export const ProductTCD = composeWithMongooseDiscriminators(ProductModel)
export const PromotionFreeTC = ProductTCD.discriminator(PromotionFreeModel, { name: enumProductType.FREE, ...discriminatorOptions })
export const PromotionSaleTC = ProductTCD.discriminator(PromotionSaleModel, { name: enumProductType.SALE, ...discriminatorOptions })
export const ProductTC = ProductTCD.discriminator(ProductModelTC, { name: enumProductType.PRODUCT, ...discriminatorOptions })

export default ProductModel
