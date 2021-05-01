import { OrderTC, UserModel, ProductModel } from '../../models'
import { UserInputError } from 'apollo-server-express'

export const createOrder = OrderTC.getResolver('createOne').wrapResolve(next => req => {
  const { args } = req
  let product
  let counts = {}
  args.record.product.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  Object.keys(counts).forEach(async key => {
    product = await ProductModel.findById(key).exec()
    product.count -= counts[key];
    product.save()
  });
  return next(req)
})
export const updateOrderById = OrderTC.getResolver('updateById').wrapResolve(next => async req => {
  const { _id } = req.context.user
  const user = await UserModel.findById(_id).exec()
  if (user.role != "ADMIN") throw new UserInputError(`User '${user.username}' Permission denied`);
  return next(req)
})
