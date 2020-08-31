import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import 'reflect-metadata'
import schemaDefs from './schema/index'
import resolvers from './resolvers'
import { Context } from './context'
import { createFirstConnection } from './createFirstConnection'

const startServer = async () => {
  const resolversAny: any = resolvers
  const schema = makeExecutableSchema({
    typeDefs: schemaDefs,
    resolvers: resolversAny,
  })

  const result = await createFirstConnection()
  if (result.connection) {
    const server = new ApolloServer({
      schema,
      context: new Context(result.connection),
    })

    server.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000`))
  } else {
    console.log(`Can't connect to database`, result.exception)
  }
}

startServer()
