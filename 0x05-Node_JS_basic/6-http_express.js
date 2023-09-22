const express = require('express');

const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const port = 1245;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for external use
module.exports = app;
