// Import required dependencies
const { buildSchema } = require('graphql');

// Build the schema for the GraphQL server
const types = buildSchema(`
  type User {
    id: Int
    first_name: String
    last_name: String
    email: String
    password: String
    address: String
    phone_number: String
    created_products: [Product!]
    bought_products: [Product!]
    rented_products: [RentInfo!]
  }

  type Product {
    id: Int
    title: String
    categories: String
    description: String
    product_price: Float
    rent_price: Float
    rent_type: String
    date_posted: String
    created_by: User
    bought_by: [User!]
    rent_info: [RentInfo!]
    views_count: Int
  }

  type RentInfo{
    id: Int
    product: Product
    rented_by: User
    rent_start_date: String
    rent_finish_date: String
  }

  type Query {
    allUsers: [User!]
    allProducts: [Product!]
    allRentInfo: [RentInfo!]
  }

  type Mutation {
    addUser(
      first_name: String
      last_name: String
      email: String
      password: String
      address: String
      phone_number: String
    ): User

    addProduct(
      title: String
      categories: String
      description: String
      product_price: Float
      rent_price: Float
      rent_type: String
      date_posted: String
      created_by_id: Int 
      views_count: Int
    ): Product

    deleteProduct(
      id: Int
    ) : Product

    editProduct(
      id: Int
      title: String
      categories: String
      description: String
      product_price: Float
      rent_price: Float
      rent_type: String
    ) : Product

    buyProduct(
      id: Int
      bought_by: Int
    ) : Product

    rentProduct(
      product_id: Int
      rented_by_id: Int
      rent_start_date: String
      rent_finish_date: String
    ): RentInfo
    
    totalViews(
      id: Int
      views_count: Int
    ) : Product
  }
`);

// Export the defined types
module.exports = types;