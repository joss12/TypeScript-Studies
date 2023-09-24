// interface Product {
//   name: string;
//   price: number;
//   rating: number;
//   sales: number;
// }

// type PickType<Type, KeyType extends keyof Type> = {
//   [Key in KeyType]: Type[Key];
// };

// type  Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// const product: PickType<Product, "name" | "rating"> = {
//   name: "TS",
//   rating: 4.6,
// };

// const product: Pick<Product, "name" | "rating"> = {
//   name: "TS",
//   rating: 4.6,
// };



// console.log(product);