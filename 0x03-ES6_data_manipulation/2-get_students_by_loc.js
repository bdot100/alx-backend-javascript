export default function getStudentsByLocation(getListStudents, city) {
  // Use the filter function to find students located in the specified city
  const studentsInCity = getListStudents.filter((student) => student.location === city);

  return studentsInCity;
}
