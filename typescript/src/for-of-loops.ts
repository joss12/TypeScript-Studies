let mixData: (string | number) [] = ["cosmos", 13, 50, "star"];

// for(let item of mixData)console.log(item);

// for(let item of mixData.entries())console.log(item[0], item[1]);

//destructuring Array
for(let [i, item] of mixData.entries()) console.log(`${i} - ${item}`);
