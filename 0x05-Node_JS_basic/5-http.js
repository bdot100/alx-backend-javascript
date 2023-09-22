/* eslint-disable guard-for-in */
const http = require('http');
const fs = require('fs').promises;

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set the status code
  res.statusCode = 200;
  // Set the response headers for plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different URL paths
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];

      // Read the database file asynchronously
      const data = await fs.readFile(databasePath, 'utf8');
      const lines = data.split('\n').filter(Boolean); // Filter out empty lines

      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const students = {};

      for (const line of lines) {
        // eslint-disable-next-line no-unused-vars
        const [firstName, lastName, age, field] = line.split(',');

        if (field in students) {
          students[field].count += 1;
          students[field].list.push(firstName);
        } else {
          students[field] = {
            count: 1,
            list: [firstName],
          };
        }
      }

      // Respond with the list of students
      res.write('This is the list of our students');
      res.write(`Number of students: ${lines.length - 1}`); // Subtract 1 for the header
      for (const field in students) {
        const { count, list } = students[field];
        res.write(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }

      res.end();
    } catch (error) {
      res.statusCode = 500; // Internal Server Error
      res.end(error.message);
    }
  } else {
    res.statusCode = 404; // Not Found
    res.end('Not Found');
  }
});

// Listen on port 1245
const port = 1245;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for external use
module.exports = app;
