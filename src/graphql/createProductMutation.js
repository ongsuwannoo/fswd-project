import { gql } from '@apollo/client'

export const CREATE_PRODUCT_MUTATION = gql`
mutation ($record: CreateOneProductInput!) {
  createProduct (record: $record) {
    recordId
  }
}
`
