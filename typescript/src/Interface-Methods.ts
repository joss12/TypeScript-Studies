// interface Employee{
//     readonly id: number;
//     name: string;
//     hobbies: string[];
//     employeeHobbies(): string[];
// };


// function getEmployeeInfo(id:number, name: string, hobbies: string[]):Employee{
//     return{
//         id,
//         name,
//         hobbies,
//         employeeHobbies(){
//             return this.hobbies;
//         }
//     };
// }

// let employee:Employee = getEmployeeInfo(1, "Eddy", [ "Reading", "Walking"]);
// console.log(employee);
// console.log(employee.employeeHobbies());