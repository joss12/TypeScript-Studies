"use strict";
function getProductPrice(product) {
    if (typeof product === "string") {
        return parseInt(product);
    }
    return product;
}
