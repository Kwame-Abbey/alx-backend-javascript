interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Morgan",
    lastName: "Abbey",
    age: 25,
    location: "Accra",
}

const student2: Student = {
    firstName: 'Kekeli',
    lastName: 'Sefenu',
    age: 21,
    location: "Cape Coast"
}

const studentsList: Student[] = [student1, student2];

const studentTable = document.createElement('table');
const studentBody = document.createElement('tbody');

studentsList.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  studentBody.appendChild(tableRow);
})

studentTable.appendChild(studentBody);
document.body.appendChild(studentTable);