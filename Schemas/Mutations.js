// Import required dependencies
const { PrismaClient } = require('@prisma/client');

// Create a new Prisma client instance
const prisma = new PrismaClient();

// Add a new user to the database
const addUser = async (_, { first_name, last_name, email, password, address, phone_number }) => {
  const user = await prisma.users.create({
    data: {
      first_name,
      last_name,
      email,
      password,
      address,
      phone_number,
    },
  });
  return user;
};

// Add a new product to the database
const addProduct = async (_, { title, categories, description, product_price, rent_price, rent_type, date_posted, created_by_id, views_count }) => {
  const product = await prisma.products.create({
    data: {
      title,
      categories,
      description,
      product_price,
      rent_price,
      rent_type,
      date_posted,
      created_by: { connect: { id: created_by_id } },
      views_count
    },
    include: {
      created_by: true,
      bought_by: { include: { created_products: true } },
      rent_info: { include: { rented_by: true } },
    }
  });
  return product;
};

// Delete a product from the database
const deleteProduct = async (_, { id }) => {
  const deletedProduct = await prisma.products.delete({
    where: {
      id: parseInt(id),
    },
  });
  return deletedProduct;
};

// Edit an existing product in the database
const editProduct = async (_, { id, title, categories, description, product_price, rent_price, rent_type }) => {
  const editedProduct = await prisma.products.update({
    data: {
      title,
      categories,
      description,
      product_price,
      rent_price,
      rent_type,
    },
    where: {
      id: parseInt(id),
    },
  });
  return editedProduct;
};

// Buy a product
const buyProduct = async (_, { id, bought_by }) => {
  const boughtProduct = await prisma.products.update({
    data: {
      bought_by: { connect: { id: bought_by } }
    },
    where: {
      id: parseInt(id),
    },
  });
  return boughtProduct;
};

// Rent a product
const rentProduct = async (_, { product_id, rented_by_id, rent_start_date, rent_finish_date }) => {
  const rentedProduct = await prisma.rentInfo.create({
    data: {
      product: { connect: { id: product_id  } },
      rented_by: { connect: { id: rented_by_id } },
      rent_start_date,
      rent_finish_date,
    },
    include: {
      product: { include: { created_by: true, bought_by: true } },
      rented_by: true 
    }
  });
  return rentedProduct;
};

// Update total views of a product
const totalViews = async (_, { id, views_count }) => {
  const countViews = await prisma.products.update({
    data: {
      views_count,
    },
    where: {
      id: parseInt(id),
    },
  });
  return countViews;
};

// Export the functions
module.exports = { addUser, addProduct, deleteProduct, editProduct, buyProduct, rentProduct, totalViews };
