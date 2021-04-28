import { gql } from '@apollo/client'

export const CREATE_PROMOTION_MUTATION = gql`
mutation ($record: CreateOnePromotionInput!) {
  createPromotion (record: $record) {
    recordId
  }
}
`

export const PROMOTION_QUERY = gql`
query ($promotionId: MongoID!) {
  promotionById (_id: $promotiontId) {
    _id
    name
    description
    type
    start_date
    start_time
    end_date
    end_time
    active
  }
}
`

export const UPDATE_PROMOTION = gql`
mutation ($promotionId: MongoID!, $record: UpdateByIdPromotionInput!) {
  updatePromotionById (_id: $promotionId, record: $record) {
    recordId
  }
}
`

export const PROMOTION_QUERY_ALL = gql`
query {
  promotions {
    _id
    name
    description
    type
    start_date
    start_time
    end_date
    end_time
    active
  }
}
`
