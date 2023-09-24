/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a Product interface with 3 properties, id, name and category and use this interface in a function type annotated with this interface that returns all the interface values as an object
*/

// ----------------------------------------------------
// interface Product{
//     readonly id: number;
//     name: string;
//     category: string;
// }

// function getProductInfo(id: number, name: string, category: string):Product{
//     return{
//         id,
//         name,
//         category
//     }
// }
// let product:Product = getProductInfo(1, "Quik", "Technical")
// console.log(product)

// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
What will the dog name log?
*/

// type Cat = {
//   name: string;
// };

// interface Dog {
//   name: string;
// }

// const cat: Cat = { name: "George" };
// const dog: Dog = cat;


// ----------------------------------------------------
// console.log(dog.name);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an interface called ProductName and a second interface called ProductPrice that extends the first interface. Finally create an object from the second interface
*/

// ----------------------------------------------------
// interface ProductName{
//     name:string;
// }

// interface ProductPrice extends ProductName {
//     price: number
// }

// const product: ProductPrice={
//     name: "TS BootCamp",
//     price: 19.99
// }

// console.log(product)

// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create an object type called ProductName and an interface called ProductPrice that extends the object type ProductName. Finally create an object from the interface
*/

// ----------------------------------------------------
type ProductName={
    name:string;
}

interface ProductPrice  extends ProductName{
    price: number
}

const product:ProductPrice={
    name:"TS",
    price:10.70
}
console.log(product)
// ----------------------------------------------------
