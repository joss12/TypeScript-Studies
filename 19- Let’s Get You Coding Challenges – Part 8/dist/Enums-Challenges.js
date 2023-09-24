"use strict";
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a group of five constants for five products of your choice and initialize the enum with 1
*/
// ----------------------------------------------------
var Products;
(function (Products) {
    Products[Products["TS"] = 1] = "TS";
    Products[Products["JS"] = 2] = "JS";
    Products[Products["PHP"] = 3] = "PHP";
    Products[Products["C#"] = 4] = "C#";
    Products[Products["Laravel"] = 5] = "Laravel";
})(Products || (Products = {}));
// ----------------------------------------------------
/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Perform an exhaustiveness checking for the previous enum and return their prices
*/
// ----------------------------------------------------
function setCoursePrice(course) {
    switch (course) {
        case Products["TS"]:
            return 10.22;
        case Products["JS"]:
            return "$9.77";
        case Products["PHP"]:
            return "$12.99";
        case Products["C#"]:
            return "$16.88";
        case Products["Laravel"]:
            return "$19.99";
        default:
            courseWarning(course);
    }
}
function courseWarning(course) {
    throw new Error(`Course${course} has not been priced.`);
}
console.log(setCoursePrice(Products["PHP"]));
console.log(setCoursePrice(Products["JS"]));
// ----------------------------------------------------
