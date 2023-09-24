//Literal type can look like a number or string

// let myNumber: 45 = 45;
// let myString: "Hello" = "Hello";

// let CourseDiscount: 25 | 35 | 45 | 75;
// let courseDiscount: CourseDiscount = 30;

//----------------------------------------------------------------

// let tip = (billAmount: number, tipPercentage:0.15 | 0.2 | 0.25):number=>{
    
//         if(typeof tipPercentage === "number"){
//             return billAmount * tipPercentage;
//         }else{
//             let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
//             return calculatedTip 
//         }
// };
    
//     let tipAmount = tip(100, 0.15);
// // let tipAmount = tip(100, "20 percent");
// console.log(tipAmount);

//----------------------------------------------------------------

type FrontEndWebDev = "HTML" | "CSS" | "JS" | "React";

let frontEndPathIncludes: FrontEndWebDev = "CSS";