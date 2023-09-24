/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a Product type with name and prices members (prices is an array of numbers). Then index into it with a ProductPrices type. Finally create an array of prices and log it
*/

// ----------------------------------------------------
type Product={
    name: string;
    price:Array<number>;
}

type ProductPrice = Product["price"];
const productPrices: ProductPrice=[12.5, 19.5]
console.log(productPrices)
// ----------------------------------------------------
