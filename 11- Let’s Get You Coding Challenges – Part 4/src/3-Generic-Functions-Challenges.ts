/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Write a generic function that simply returns its argument. Test with several types
*/
// ----------------------------------------------------
// function returnArg<T>(elements:T):T{
//     return elements;
// }
// console.log(returnArg("HTML"));
// console.log(returnArg("CSS"));
// console.log(returnArg("JS"));
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Write a generic function that returns the length of an array. Test with several types
*/
// ----------------------------------------------------
// function returnLength<T>(elements:T[]):number{
//     return elements.length; 
// }
// console.log(returnLength(["HTML", "CSS", "JS"]));
// console.log(returnLength([1, 2, 3, 4]));
// console.log(returnLength([true, false, 1, 10, 'a']));
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Write a generic function which accepts an array of strings returning the 5th item
*/
// ----------------------------------------------------
// function myStr<T>(elements:Array<T>):T{
//     return elements[4];
// }
// console.log(myStr(['a', 'b', 'c', 'd', 'e', 'f'])) //e
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Write a generic function that accepts a generic array returning the last item of the array
*/
// ----------------------------------------------------
// function sameFunc<Elements>(elements: Array<Elements>): Elements{
//     return elements[elements.length -1];
// }
// console.log(sameFunc<number>([1, 2, 3, 4, 5]));
// console.log(sameFunc<boolean>([true, false]));
// console.log(sameFunc<string>(["Hey", "Hi"]));
// ----------------------------------------------------
