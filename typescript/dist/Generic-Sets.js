"use strict";
let mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log(mySet.has(5));
console.log(mySet);
let mixedData = new Set(["Hi", 1]);
console.log(mixedData.size);
