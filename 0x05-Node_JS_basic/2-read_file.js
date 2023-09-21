/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(Boolean); // Filter out empty lines

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};

    for (const line of lines) {
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
    for (const field in students) {
      const { count, list } = students[field];
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
