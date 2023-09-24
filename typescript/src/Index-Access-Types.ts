// let product = {
//     name: "TS",
//     price: 10.99
// }

// let courseName = product.name;
// let courseName = product.price;

//--------------------------------

// type Product = {
//     name: string,
//     price: number
// }

// type CourseName = Product["name"];
// const courseName: CourseName = "TS";
// console.log(courseName);

//--------------------------------
// type Product = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// function promoteProduct(
//   name: string,
//   price: number,
//   moreInfo: Product["moreInfo"]
// ): Product {
//   return {
//     name,
//     price,
//     moreInfo
//   };
// }

// let courseInfo = promoteProduct("TS", 19.88, {
//     released: true,
//     beginnerFriendly: true,
//     level: "Beginner - Advanced",
// });

// console.log(courseInfo);

//------------------------------------------

// type Product = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// let courseName: Product["name"] = "TS";
// let coursePrice: Product["price"] = 10.99;
// let courseLevel: Product["moreInfo"]["level"] = "Beginner-Advanced";


// let courseInfo: Product["name" | "price"] = "TS";
// let courseInfo: Product["name"]["price"] = 10.99; 