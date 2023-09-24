"use strict";
function itemOrItems(item) {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.productName;
    }
}
console.log(itemOrItems({ productName: "TS" }));
console.log(itemOrItems([{ productName: "TS" }, { productName: "JS" }]));
