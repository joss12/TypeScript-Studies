// const course = {
//     name: "Ts",
//     price: 10.77
// };


// type Product = typeof course;
// type productKeys = keyof Product;
// type ProductKeyTypes = Product[productKeys]

// let product: Product = {
//     name: "js",
//     price:19.55
// }

// //look up type
// function getCourseInfo<T, K extends keyof T>(course: T, info: K){
//     return course[info]
// }

// let courseName = getCourseInfo(course, "name");
// let coursePrice = getCourseInfo(course, "price");

// console.log(courseName, coursePrice)

// // console.log(product);