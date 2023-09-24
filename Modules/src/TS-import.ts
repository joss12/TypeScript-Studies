// import { getProductName, course, courseName } from './TS-modules';
// import { getProductName as product, course } from "./TS-modules";

// console.log(({product: "TS Bootcamp"}));
// console.log(course);
//----------------------------------------------------------------

// import { course } from "./Re-Export";

// console.log(course);

//----------------------------------------------------------------

// import { product, productList } from "./utils";

// console.log(product);
// console.log(productList);

//----------------------------------------------------------------

// import defaultCourse from './TS-modules';
// console.log(defaultCourse);


// import courseObject from './TS-modules';
// console.log(courseObject);


// import coursePhp from './TS-modules';
// console.log(coursePhp);

// import addOneToOne from './TS-modules';
// console.log(addOneToOne);

//-------------------------------------------------------

// import cool = require ("./TS-modules");
//-------------------------------------------------------

// import {released, courseName} from "./TS-modules";

// if(released){
//     import("./TS-modules").then(()=>console.log(`The course ame is ${courseName}`))
// }

//----------------------------------------------------importing JSON files

// import * as config from "./config.json"


//--------------------------------------------------Ambient 
// import {addition} from "./ambient";
import {addition} from "ambient";
addition(20, 10);

//--------------------------------------------------Ambient 

// import {addition} from "ambient";
// addition(20, 10);


// declare module "ambient"{
//     export function addition(): string;
// }
// addition();

//--------------------------------------------------Resolution and Tracing modules