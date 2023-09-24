"use strict";
let holidaySales1 = function (product, sales, tax, discount) {
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
};
const pens = holidaySales1("sunglasses", 20, 0.15, 0.25);
const erasers = holidaySales1("hats", 15, 0.12, 0.15);
const pencils = holidaySales1("shoes", 50, 0.08, 0.45);
console.log(`The total profit from the sales of sunglasses is ${pens}`);
console.log(`The total profit from the sales of hats is ${erasers}`);
console.log(`The total profit from the sales of shoes is ${pencils}`);
