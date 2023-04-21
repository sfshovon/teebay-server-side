// Import the PrismaClient module and create a new instance
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Define a function that retrieves all users and all products from the database using PrismaClient
const getUsers = async () => {
  return await prisma.users.findMany({ include: { created_products: true, bought_products: true, rented_products: { include: { product: true } } } });
}

const getProducts = async () => {
  return await prisma.products.findMany({ include: { created_by: true, bought_by: true, rent_info: { include: { rented_by: true }} } });
}

const getRentsInfo= async () => {
  return await prisma.rentInfo.findMany({ include: { product: { include: { created_by: true, bought_by: true } }, rented_by: true} }); 
}

// Export the getUsers and getProducts functions for use in other modules
module.exports = { getUsers, getProducts, getRentsInfo };
