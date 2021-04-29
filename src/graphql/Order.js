import { gql } from '@apollo/client'

export const CREATE_ORDER_MUTATION = gql`
mutation ($record: CreateOneOrderInput!) {
  createOrder (record: $record) {
    recordId
  }
}
`

export const ORDER_QUERY = gql`
query ($orderId: MongoID!) {
  orderById (_id: $orderId) {
    name

  }
}
`

export const UPDATE_ORDER = gql`
mutation ($orderId: MongoID!, $record: UpdateByIdOrderInput!) {
  updateOrderById (_id: $orderId, record: $record) {
    recordId
  }
}
`

export const ORDER_QUERY_ALL = gql`
query {
  orders {
    _id
    order_id
    customer_id
    price
    status
    date
  }
}
`
