const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/typedefs/prisma.graphql',
    resolvers: {
      Query: Query.Query,
      Link: Query.Link,
      Mutation: Mutation.Mutation,
    },
    context: { prisma },
  })
}

module.exports = createServer;