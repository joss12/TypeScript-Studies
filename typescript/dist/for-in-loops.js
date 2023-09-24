"use strict";
let data = ["Cosmos", 13, 15, "star"];
for (let dataPoint in data) {
    console.log(`${+dataPoint + 1}- ${data[dataPoint]}`);
}
