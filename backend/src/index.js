require('dotenv').config();
const createServer = require('./createServer');

const server = createServer();

// TODO: Use Express middleware to handle cookies
// TODO: Use Express middleware to populate current user

server.start(() => {
  console.log(`Server running on port 4000`);
});