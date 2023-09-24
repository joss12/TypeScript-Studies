"use strict";
let holidaySales2 = (product, sales, tax, discount) => {
    let price = 0;
    if (product === "laptops")
        price = 900;
    if (product === "monitors")
        price = 350;
    if (product === "keyboard")
        price = 25;
    let totalSalesForIndividualProduct = price * sales;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
};
const laptops = holidaySales2("laptops", 20, 0.15, 0.25);
const monitors = holidaySales2("monitors", 15, 0.12, 0.15);
const keyboard = holidaySales2("keyboard", 50, 0.08, 0.45);
console.log(`The total profit from the sales of sunglasses is ${pens}`);
console.log(`The total profit from the sales of hats is ${erasers}`);
console.log(`The total profit from the sales of shoes is ${pencils}`);
