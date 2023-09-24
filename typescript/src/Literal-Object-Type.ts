// type Student = { fullName: string};

// function studentDB(student:  { fullName: string}): string{
//     return student.fullName;
// }



function studentDB({fullName}:  { fullName: string}): string{
    return fullName;
}
// const student = {fullName: "Eddy Mouity"};

console.log(studentDB({fullName: "Eddy Mouity"}))
console.log(studentDB({fullName: "Grace Mouity"}))
