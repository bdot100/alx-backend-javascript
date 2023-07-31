export default function getStudentIdsSum(getListStudents) {
  // Use the reduce function to calculate the sum of student IDs
  const sum = getListStudents.reduce((acc, student) => acc + student.id, 0);

  return sum;
}
