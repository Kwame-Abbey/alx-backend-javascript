export default function getStudentIdsSum(studentsList) {
  const studentsId = studentsList.map((stu) => stu.id);
  const result = studentsId.reduce((acc, initialValue) => acc + initialValue);

  return result;
}
