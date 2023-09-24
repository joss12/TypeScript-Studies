"use strict";
/* *-*-*-*-*-*-*-*-*-*-* Challenge 9 ------------------
What will the following function invocations result in?
*/
function add(price, sales) {
    return price * (sales !== null && sales !== void 0 ? sales : 1);
}
console.log(add(9.99, 4));
console.log(add(10.99));
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
