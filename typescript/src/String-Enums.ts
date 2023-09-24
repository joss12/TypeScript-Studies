enum Employee {
    Name ="Eddy Mouity",
    Job = "Web Developer",
}

function getEmployeeInFo(employee: Employee): Employee{
    return employee;
}

console.log(getEmployeeInFo(Employee.Name));
console.log(getEmployeeInFo(Employee.Job));