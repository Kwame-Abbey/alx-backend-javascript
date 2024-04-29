export default function getStudentsByLocation(studentsList, city) {
  const filteredList = studentsList.filter((stu) => stu.location === city);

  return filteredList;
}
