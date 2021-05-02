import { ProductTC } from '../../models'

export const products = ProductTC.getResolver('findMany')
export const productById = ProductTC.getResolver('findById')
export const productByIds = ProductTC.getResolver('findByIds')
