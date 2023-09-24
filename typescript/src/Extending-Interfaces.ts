// interface Department {
//   department: string[];
// }

// interface Employee extends Department {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
//   employeeHobbies(): string[];
// }

// function getEmployeeInfo(
//   id: number,
//   name: string,
//   department: string[],
//   hobbies: string[]
// ): Employee {
//   return {
//     id,
//     name,
//     hobbies,
//     department,

//     employeeHobbies() {
//       return this.hobbies;
//     },
//   };
// }

// let employee: Employee = getEmployeeInfo(1, "Eddy",["Development"], ["Reading", "Walking"]);
// console.log(employee);
// // console.log(employee.employeeHobbies());
