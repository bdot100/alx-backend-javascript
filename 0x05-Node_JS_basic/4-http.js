const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the status code
  res.statusCode = 200;

  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Respond with "Hello Holberton School!" for any endpoint
  res.end('Hello Holberton School!');
});

// Listen on port 1245
const port = 1245;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
});

// Export the app for external use
module.exports = app;
