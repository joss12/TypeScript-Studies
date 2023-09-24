// type Product={
//     name: string;
// }

// let course: Product={
//     name: "TS Bootcamp"
// }

//-------------------------------

// type Product = {
//     // [k: string]: string;
//     [courseName: string]: string;
// };

// let course: Product = {
//     TS: "TS Bootcamp",
//     JS: "JS Bootcamp",
//     Python: "Python Bootcamp",
// }


//-------------------------------
// type Product={
//     [isPrice:string]: boolean;
//     released: boolean;
// }

// let course: Product = {
//     TS: true,
//     JS:true,
//     released: true
// }

// console.log(course)

//-------------------------------

// type Product={
//     [price:string]: number;
//     released: boolean;
// }

// let course: Product = {
//     TS: true,
//     JS:true,
//     released: true
// }

// console.log(course);


//-------------------------------
// type Product = {
//     [k: string]:{
//         name: string,
//         price: number
//     };
// };

// let course: Product = {
//     NodeJS: {name:"Node.Js", price: 10.99},
//     JavaScript: {name:"JavaScript", price: 11.99},
//     TS: {name:"TypeScript", price: 12.99}
// }

// console.log(course)
