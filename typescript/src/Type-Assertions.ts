
// type Employee={
//     id: number,
//     name: string,
//     department: string
// }

// const employee = {
//     id:1,
//     name:"Scott",
//     department:"Design"
// }; 

// const hiredEmployee = JSON.stringify(employee);
// console.log(typeof hiredEmployee);

// function getEmployeeInfo(employeeObject:string){
//     return JSON.parse(employeeObject);

    //OLd method
    // return (<Employee>JSON.parse(employeeObject));
    // return (<Employee>JSON.parse(employeeObject)).id;
    // return (<Employee>JSON.parse(employeeObject)).name;
    // return (<Employee>JSON.parse(employeeObject)).department;

    // return JSON.parse(employeeObject) as Employee;
// }

// console.log(getEmployeeInfo(hiredEmployee));