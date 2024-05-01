var student1 = {
    firstName: "Morgan",
    lastName: "Abbey",
    age: 25,
    location: "Accra",
};
var student2 = {
    firstName: 'Kekeli',
    lastName: 'Sefenu',
    age: 21,
    location: "Cape Coast"
};
var studentsList = [student1, student2];
var studentTable = document.createElement('table');
var studentBody = document.createElement('tbody');
studentsList.forEach(function (objectList) {
    var tableName = document.createElement('tableName');
    var tableRow = document.createElement('tableRow');
    var tableLocation = document.createElement('tableLocation');
    tableName.textContent = objectList.firstName;
    tableLocation.textContent = objectList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    studentBody.appendChild(tableRow);
});
studentTable.appendChild(studentBody);
document.body.appendChild(studentTable);
