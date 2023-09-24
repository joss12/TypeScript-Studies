"use strict";
var Crops;
(function (Crops) {
    Crops[Crops["Barley"] = "Barley".length] = "Barley";
    Crops[Crops["Corn"] = 2] = "Corn";
    Crops[Crops["Wheat"] = 3] = "Wheat";
})(Crops || (Crops = {}));
console.log(Crops);
