import { gql } from 'apollo-server'

export default gql`
  type Clothes {
    id: ID!
  }

  input ClothesInput {
    id: ID!
  }

  extend type Mutation {
    createClothes(input: ClothesInput!): Clothes
  }
`
