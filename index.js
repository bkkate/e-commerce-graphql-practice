//graphql Server -- entry point file when the server starts up

// node syntax for importing something.
const { ApolloServer } = require("apollo-server");
// import the schema (in a separate file)
const { typeDefs } = require("./schema");
// import data
const { products, categories } = require("./db");
// import the resolvers (in a separate folder/file)
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");

//Here, we are instantiating a new apollo server
// need type definitions & resolvers passed in for the server to start/work
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  // context: once defined here, it can be accessed by resolvers (as context argument)
  // without having to import manually 
  context: {
    products,
    categories
  }
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
