let data: (string | number)[] = ["Cosmos", 13, 15, "star"];

for(let dataPoint in data){
    // console.log(dataPoint);
    // console.log(typeof  dataPoint); // + === parseInt()
    // console.log(typeof +dataPoint); 
    console.log(`${+dataPoint + 1}- ${data[dataPoint]}`);
}