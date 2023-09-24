/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function that accepts either a number or undefined. If a number is passed then it returns the number otherwise it returns 1
*/

// ----------------------------------------------------
function MyNum(arg:number | undefined): number{
    // if(arg === undefined){
    //     return 1
    // }else{
    //     return arg;
    // }

    return arg || 1
}

console.log(MyNum(10))
console.log(MyNum(undefined))
// ----------------------------------------------------
