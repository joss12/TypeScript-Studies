"use strict";
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product === "sunglasses")
        price = 29;
    if (product === "hat")
        price = 19;
    if (product === "shoes")
        price = 59;
    let totalSalesForIndividualProduct = price * sales;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
}
const sunGlasses = holidaySales("sunglasses", 20, 0.15, 0.25);
const hats = holidaySales("hats", 15, 0.12, 0.15);
const shoes = holidaySales("shoes", 50, 0.08, 0.45);
console.log(`The total profit from the sales of sunglasses is ${sunGlasses}`);
console.log(`The total profit from the sales of hats is ${hats}`);
console.log(`The total profit from the sales of shoes is ${shoes}`);
