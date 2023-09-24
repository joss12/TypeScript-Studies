/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Write a function that adds or subtracts 1 from a number based on a boolean evaluation. If the boolean is true, it adds 1 otherwise subtracts 1 from the number
*/

// ----------------------------------------------------
function decideOperation(num:number, bool:boolean):number{
    if(bool === true){
        return num + 1;
    }
    return num -1
}
// console.log(decideOperation());

function decideOperation1(num:number, bool:boolean):number{
    if(bool) return num + 1;
    return num -1
}
// console.log(decideOperation());

function decideOperation2(num:number, bool:boolean):number{
    return(bool) ? num + 1 : num - 1
}
// console.log(decideOperation(10, true))
// ----------------------------------------------------
