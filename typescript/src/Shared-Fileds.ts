// type Product = {
//     name: string;
//     price: number;
//     sales: number;
//     availability: string;
//     category: string
// };

// type Course = {
//     name: string;
//     price: number;
//     sales: number;
//     released: boolean;
//     rating:number; 
// }

// type OnlineCourse = Product | Course

// const course: OnlineCourse = {
//     name: "TS",
//     price: 10.88,
//     sales: 2000,
//     released:true,
//     rating: 4.6,
//     availability: "available",
//     category: "Web Developer"
// }

// console.log(course)
//--------------------------------------
//Shared Fields:
// type DigitalProduct={
//     name:string;
//     price: number;
//     sales: number
// }

// type Product = DigitalProduct &{
//     availability: string;
//     category: string
// };

// type Course = DigitalProduct &{
//     released: boolean;
//     rating:number; 
// }

// type OnlineCourse = Product | Course

// const course: OnlineCourse = {
//     name: "TS",
//     price: 10.88,
//     sales: 2000,
//     released:true,
//     rating: 4.6,
//     availability: "available",
//     category: "Web Developer"
// }

//------------------------------------------
// type DigitalProduct={
//     name:string;
//     price: number;
//     sales: number
// }&(
//     |{
//         availability: string;
//         category: string
//     } | {
//         released: boolean;
//         rating:number; 
//     } 
// )


// const course: DigitalProduct = {
//     name: "TS",
//     price: 10.88,
//     sales: 2000,
//     released:true,
//     rating: 4.6,
//     availability: "available",
//     category: "Web Developer"
// }

// console.log(course)