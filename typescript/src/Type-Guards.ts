function getProductPrice(product: string | number):number{
    if(typeof product === "string"){
        return parseInt(product)
    }
    return product;
}

// const coursePrice = getProductPrice("10");
// console.log(coursePrice);


// -------------------------------2- instanceof

// let newDate = new Date();

// if(newDate instanceof Date){
//     console.log("success");
// }else{
//     console.log("Failure");
// }


// ------------------------3- specific value
// let someValue = null;
// if(someValue === null){
//     console.log("Success");
// }else{
//     console.log("Failure");
// }

// -------------------------- 4- truthy and falsy check

// let someValue = true;

// if(!someValue){
//     console.log("Success");
// }else{
//     console.log("failure");
// }


// -------------------------- 5- Built-in method

// let someArr = [1,2,3];
// if(Array.isArray(someArr)){
//      console.log("success");
// }else{
//     console.log("failure");
// }

// -------------------------- 6- Property Presence check

// let someObject = {name:"TS"};
// if("name" in someObject){
//     console.log("Success");
// }else{
//     console.log("failure")
// }