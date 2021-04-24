const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
const path = require('path')
const fs = require('fs')

const typeDefs = gql`
  type File {
    url: String!
  }

  type Query {
    hello: String!
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world',
  },
  Mutation: {
    uploadFile: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, mode } = await file
      const pathName = path.join(__dirname, `/public/images/${filename}`)

      await new Promise((res) =>
        createReadStream().pipe(
          fs.createWriteStream(pathName))
          .on("close", res)
      );

      return {
        url: `http://localhost:4000/images/${filename}`,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express()
const path_ = '/graphql'
server.applyMiddleware({ app, path_ })

app.use(express.static('public'))

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000`);
});
