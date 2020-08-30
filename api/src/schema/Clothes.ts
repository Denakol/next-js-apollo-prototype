import { gql } from 'apollo-server'

export default gql`
  enum ShirtColor {
    white
    grey
    blue
  }

  type Shirt {
    id: ID!
    name: String
    color: String!
    size: Int!
  }

  type Pants {
    id: ID!
    name: String
    color: String!
    W: Int!
    L: Int!
  }

  union Clothes = Shirt | Pants

  input ClothesQueryInput {
    name: String
    color: String!
  }

  extend type Query {
    clothes: [Clothes!]!
  }

  input ShirtInput {
    name: String
    color: ShirtColor!
    size: Int!
  }

  input PantsInput {
    name: String
    color: String!
    W: Int!
    L: Int!
  }

  extend type Mutation {
    createShirt(input: ShirtInput!): Shirt
    createPants(input: PantsInput!): Pants
  }
`
