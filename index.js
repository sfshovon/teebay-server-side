// Import required dependencies
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');

// Initialize the Express app and set the port
const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware
app.use(cors());
app.use(express.json());

// Define the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema, // Define the schema (combinations between mutations(create/update/delete statements) and queries(read/get)
  graphiql: true, // Enable GraphiQL UI for testing
}));

// Define a simple route for the root endpoint
app.get('/', (req, res) => {
  res.send('Teebay backend server is running');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});