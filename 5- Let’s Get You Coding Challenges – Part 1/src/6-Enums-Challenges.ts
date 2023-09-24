/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an enum of product names and display it on the console
*/

// ----------------------------------------------------
enum productNames{
    product1 = "laptop",
    product2 = "mouse",
    product3 = "keyboard",
}
// console.log(productNames);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an enum of product ids and display it on the console
*/

// ----------------------------------------------------
enum productIds{
    laptop = 1,
    mouse ,
    keyboard,
}
// console.log(productIds);
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an enum of a single favorite product detail from the two previously created enums and display it on the console
*/

enum FavoriteProduct{
    Name= productNames.product1,
    Id = productIds.laptop
}

console.log(`${FavoriteProduct.Name} ${FavoriteProduct.Id}`)
