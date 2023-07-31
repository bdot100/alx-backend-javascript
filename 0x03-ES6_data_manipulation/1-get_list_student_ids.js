export default function getListStudentIds(getListStudents) {
  // Check if the argument is an array
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  // Use the map function to extract IDs from each object in the array
  const ids = getListStudents.map((student) => student.id);
  return ids;
}
