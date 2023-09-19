const fs = require('fs');

/**
 * Count the number of students in each field from a CSV database file.
 *
 * @param {string} path - The path to the CSV database file.
 * @throws {Error} Throws an error if the database file cannot be loaded.
 */
function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the file content into lines
    const lines = data.split('\n');
    
    // Extract the field names (first line of the CSV)
    const fields = lines[0].split(',');

    // Create an object to store students by field
    const students = {};

    // Initialize arrays for each field
    fields.forEach((field) => {
      students[field] = [];
    });

    // Process each line of student data
    lines.slice(1).forEach((line) => {
      if (line !== '') {
        const values = line.split(',');
        fields.forEach((field, index) => {
          // Only consider non-empty values
          if (values[index] !== undefined && values[index].trim() !== '') {
            students[field].push(values[index].trim());
          }
        });
      }
    });

    // Display the total number of students
    console.log(`Number of students: ${students.Student.length}`);

    // Display the number of students in each field and their names
    for (const field in students) {
      if (field !== 'Student') {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    // Handle errors by throwing an informative message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
