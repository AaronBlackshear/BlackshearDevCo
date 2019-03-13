const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/typedefs/prisma.graphql',
    resolvers: {
      Query,
      Mutation,
      User,
      Link,
    },
    context: request => ({
      ...request,
      prisma,
    }),
  })
}

module.exports = createServer;