"use strict";
var productNames;
(function (productNames) {
    productNames["product1"] = "laptop";
    productNames["product2"] = "mouse";
    productNames["product3"] = "keyboard";
})(productNames || (productNames = {}));
var productIds;
(function (productIds) {
    productIds[productIds["laptop"] = 1] = "laptop";
    productIds[productIds["mouse"] = 2] = "mouse";
    productIds[productIds["keyboard"] = 3] = "keyboard";
})(productIds || (productIds = {}));
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "laptop";
    FavoriteProduct[FavoriteProduct["Id"] = 1] = "Id";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(`${FavoriteProduct.Name} ${FavoriteProduct.Id}`);
//# sourceMappingURL=6-Enums-Challenges.js.map