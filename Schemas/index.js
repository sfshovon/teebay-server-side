// Import required dependencies
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PrismaClient } = require('@prisma/client');
const { getUsers, getProducts, getRentsInfo } = require('./Queries');
const { addUser, addProduct, deleteProduct, editProduct, buyProduct, rentProduct, totalViews } = require('./Mutations');
const typeDefs = require('./Types');

// Create a new Prisma client instance
const prisma = new PrismaClient();

// Check database connection
async function checkConnection() {
  try {
    await prisma.$connect();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error', error);
  } 
}

// Call the checkConnection function to verify database connectivity
checkConnection();

// Define the resolvers for the GraphQL schema
const resolvers = {
  Query: {
    allUsers: getUsers,
    allProducts: getProducts,
    allRentInfo: getRentsInfo
  },
  Mutation: {
    addUser,
    addProduct,
    deleteProduct,
    editProduct,
    buyProduct,
    rentProduct,
    totalViews
  },
};

// Define the GraphQL schema using the makeExecutableSchema function
const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

module.exports = schema;