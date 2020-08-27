import { gql } from 'apollo-server'

export default gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`
