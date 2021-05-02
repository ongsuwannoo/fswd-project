import { ProductTCD, PromotionFreeTC, PromotionSaleTC } from '../../models'

export const products = ProductTCD.getResolver('findMany')
export const productById = ProductTCD.getResolver('findById')
export const productByIds = ProductTCD.getResolver('findByIds')

export const productFrees = PromotionFreeTC.getResolver('findMany')
export const productFreeById = PromotionFreeTC.getResolver('findById')
export const productFreeByIds = PromotionFreeTC.getResolver('findByIds')

export const productSale = PromotionSaleTC.getResolver('findMany')
export const productSaleById = PromotionSaleTC.getResolver('findById')
export const productSaleByIds = PromotionSaleTC.getResolver('findByIds')
