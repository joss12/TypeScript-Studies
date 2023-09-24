"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const product1 = new Product("TS Bootstrap", 11.99);
const product2 = new Product("JS Bootstrap", "$11.99");
const product3 = new Product("PHP Bootcamp", "Not Avialable");
console.log(product1);
console.log(product2);
console.log(product3);
