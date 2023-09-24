/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an object type that has 3 properties (name, age, job) and create an object from this type
*/

// ----------------------------------------------------
// type Employee={
//     name: string,
//     age: number,
//     job:string
// }

// const employee:Employee={
//     name: "Eddy",
//     age: 32,
//     job: "Web dev"
// }

// let details = employee.name;
// let details2 = employee.age;
// let details3 = employee.job;

// console.log(`The employee name is ${employee.name} is age ${employee.age} and works as a ${employee.job}`)

// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Access the published property from the following object using the bracket notation and the dot notation
*/

// type OnlineCourse = {
//   name: string;
//   platform: string;
//   features: string[];
//   "meta-data": {
//     published: boolean;
//   };
// };

// let myCourse: OnlineCourse = {
//   name: "TS Bootcamp",
//   platform: "Udemy",
//   features: ["Practical", "Exercise Oriented", "Modern TS Concepts"],
//   "meta-data": {
//     published: true,
//   },
// };

// ----------------------------------------------------
// console.log(myCourse["meta-data"]["published"])// true solution1
// console.log(myCourse["meta-data"].published); //true solution2
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Fix the error in the following code by modifying the type Product. Do not make changes to the product1 or product2 objects
*/

// type Product = {
//   name: string;
//   publishedStatus: boolean;
// };

// const product1: Product = { name: "TS Bootcamp", publishedStatus:false };
// const product2: Product = { name: "TS Bootcamp", publishedStatus: true };

// ----------------------------------------------------
// console.log(product1);
// console.log(product2);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
What will the product object log?
*/

// const onlineCourse = { name: "TS Bootcamp", price: 10.99 };
// const product = { ...onlineCourse, released: true };


// ----------------------------------------------------
// console.log(product);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Create a product type and add a holidaySales method that return a string “Sale is On”. Finish by creating an object from the type and logging the string on the console
*/

// ----------------------------------------------------
// type Product = {
//     holidaySales:()=> string
// }

// type product ={
//     holidaySales(): string
// }

// const product: Product ={
//     holidaySales:() => "Sale ins On"
// }
// product.holidaySales();
// ----------------------------------------------------
