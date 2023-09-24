// interface Product{
//     name: string;
//     price:number;
// }

// type ReadOnlyType<Type>={
//    readonly [Key in keyof Type]: Type[Key]
// }

// const product: ReadOnlyType<Product> = {
//     name: "TS",
//     price: 10.88
// }
// const product: Readonly<Product> = {
//     name: "TS",
//     price: 10.88
// }

// product.name = "JS"

// console.log(product)