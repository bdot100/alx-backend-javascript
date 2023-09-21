const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(Boolean); // Filter out empty lines

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
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

        console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 for the header
        // eslint-disable-next-line guard-for-in
        for (const field in students) {
          const { count, list } = students[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
