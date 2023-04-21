# teebay-server-side

### Description
This is teebay's server-side application built using Node.js and GraphQL and Prisma. It allows users to buy and sell items on a platform. This documentation file provides instructions for installing, running, and using Teebay.

### Installation
To install Teebay, follow these steps:
- Clone the repository to your local machine.
- Navigate to the project directory in your terminal.
- Run npm install to install the dependencies.
- Run npx prisma migrate dev to create database relations from schema (Configure your .env file).
- Run nodemon index.js to start the server side.

### Dependencies
The following dependencies are required to run Teebay:
- @graphql-tools/schema: version 9.0.17
- @prisma/client: version 4.11.0
- cors: version 2.8.5
- express: version 4.18.2
- express-graphql: version 0.12.0
- graphql: version 16.6.0
- pg: version 8.10.0

### Development Dependencies
Teebay also requires the following development dependencies:
- prisma: version 4.11.0

### Scripts
Teebay comes with the following pre-defined scripts:
- start: Starts the server using node index.js.
- start-dev: Starts the server using nodemon index.js.
- test: Echoes an error message and exits with code 1 (used for testing). 

### Run Aplication
To start Teebay, run npm start in your terminal. If you want to use nodemon for development purposes, you can run npm run start-dev instead. Once the server is running, you can access it by visiting http://localhost:4000/ in your web browser.
