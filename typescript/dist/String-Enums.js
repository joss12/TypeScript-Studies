"use strict";
var Employee;
(function (Employee) {
    Employee["Name"] = "Eddy Mouity";
    Employee["Job"] = "Web Developer";
})(Employee || (Employee = {}));
function getEmployeeInFo(employee) {
    return employee;
}
console.log(getEmployeeInFo(Employee.Name));
console.log(getEmployeeInFo(Employee.Job));
