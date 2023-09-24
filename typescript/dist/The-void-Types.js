"use strict";
function printHello() {
    console.log("Hello!");
}
printHello();
let productCategory;
let shoppingCart = (category) => {
    productCategory = category;
};
console.log(shoppingCart("T-shirt"));
