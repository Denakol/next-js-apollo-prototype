import { ApolloServer, makeExecutableSchema } from 'apollo-server'

import 'reflect-metadata'
import { createConnection } from 'typeorm'
import schemaDefs from './schema/index'
import resolvers from './resolvers'
import { Context } from './context'

const startServer = async () => {
  const resolversAny: any = resolvers
  const schema = makeExecutableSchema({
    typeDefs: schemaDefs,
    resolvers: resolversAny,
  })

  try {
    const connection = await createConnection()
    const server = new ApolloServer({
      schema,
      context: new Context(connection),
    })

    server.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000`))
  } catch (ex) {
    console.log(`Can't connect to database`, ex)
  }
}

startServer()
