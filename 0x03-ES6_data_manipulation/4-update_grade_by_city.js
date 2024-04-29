export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const newList = studentsList.filter((stu) => stu.location === city).map((student) => {
    const newStudent = student;
    newStudent.grade = 'N/A';
    for (const stuGrade of newGrades) {
      if (newStudent.id === stuGrade.studentId) {
        newStudent.grade = stuGrade.grade;
      }
    }
    return newStudent;
  });
  return newList;
}
