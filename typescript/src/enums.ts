/**
 * Enums allow to declare a set of main constants
 * This basically means that we have a collection of values that could
 * be numeric or string values
 * We have 3 types of emuns:
 * -Numeric enum
 * -String enum
 * -Heterogeneous enum
 */

//Numeric Enums

//PascalCase
//camelCase

// enum RollNumbers {
//     Eddy,
//     Grace,
//     Stan,
//     Stany,
//     Joss
// }
// console.log(RollNumbers)


enum RollNumbers {
    Eddy = 1,
    Grace,
    Stan,
    Elike,
    Joss
}


// let studentRollNumber1: RollNumbers = RollNumbers.Stan;
// let studentRollNumber2: RollNumbers = RollNumbers.Elike;
// console.log(studentRollNumber1);
// console.log(studentRollNumber2)

//String enums types

// const enum studentDetails{
//     Name = "Eddy",
//     Major = "Art",
// };

// let studentName: studentDetails = studentDetails.Name;
// let studentMajor: studentDetails = studentDetails.Major;
// console.log(studentName, studentMajor);

//Heterogeneous enums

const enum studentDetails{
    ID = 1,
    Name = "Eddy",
    Major = "Art",
};

let studentId: studentDetails = studentDetails.ID;
let studentName: studentDetails = studentDetails.Name;
let studentMajor: studentDetails = studentDetails.Major;

console.log(`${studentId} - ${studentName} Has a major in ${studentMajor}`);