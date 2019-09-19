const ApolloServer  = require( 'apollo-server-express');
const typeDefs = require('./graphql/typedefs');
const resolvers = require ( './graphql/resolvers');
const express = require('express');
const app = express();

// TODO: We will not pass dataSources via context because this does not work with subscriptions
// See https://github.com/apollographql/apollo-server/issues/1526

const server = new ApolloServer.ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// server.listen().then(({ url }) => {
//     console.log(`Server ready at ${url}`);
// });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
