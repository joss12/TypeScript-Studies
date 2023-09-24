/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
What will the object Product log?
*/

// type Products = {
//   [price: string]: number;
//   name: string;
// };
// const products: Products = {
//   name: "TS Bootcamp",
//   price: 10.99,
// };

// ----------------------------------------------------
// Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
// Type '{ name: string; price: number; }' is not assignable to type 'Products'.
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an index signature that map a product’s name (a string) to a price (a number or undefined). Finally create an object from the type
*/

// ----------------------------------------------------
// type Product = {
//     [name: string]: number | undefined;
// }

// const product:Product ={
//     TS: 10.99,
//     JS: 10.99,
//     PHP: 19.09
// }
// console.log(product);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
What will the Product Object log?
*/

// type Product = {
//   [price: string]: number;
//   noOfStudents: number;
// };

// const product: Product = {
//   FlexBox: 10.99,
//   noOfStudents: 4200,
// };

// console.log(product);

// ----------------------------------------------------
// { FlexBox: 10.99, noOfStudents: 4200 }
// ----------------------------------------------------
