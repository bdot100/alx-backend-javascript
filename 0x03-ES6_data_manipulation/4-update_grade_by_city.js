export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  // Use filter to find students in the specified city
  const studentsInCity = getListStudents.filter((student) => student.location === city);

  // Use map to update the grades for students in the specified city
  const updatedStudents = studentsInCity.map((student) => {
    // Find the grade object for the current student from newGrades array
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // If the grade object exists, use the grade value, otherwise set the grade as "N/A"
    const grade = gradeObj ? gradeObj.grade : 'N/A';

    // Return the student object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
