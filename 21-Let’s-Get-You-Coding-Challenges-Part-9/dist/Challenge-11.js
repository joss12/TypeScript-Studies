"use strict";
/* *-*-*-*-*-*-*-*-*-*-* Challenge 11 ------------------
What will the function invocation result in?
*/
// type SucceededAPICall = {
//   response: "success";
//   value: number;
// };
// type FailedAPICall = {
//   response: "failure";
//   reason: string;
// };
// type APICall = SucceededAPICall | FailedAPICall ;
// function APICallStatus(s: string): APICall {
//   const n: number = Number(s);
//   if (Number.isNaN(n)) {
//     return {
//       response: "failure",
//       reason: "the string passed cannot be converted into a number",
//     };
//   } else {
//     return { response: "success", value: n };
//   }
// }
// console.log(APICallStatus("10"));
// console.log(APICallStatus("10").value);
// ----------------------------------------------------
// Property 'value' does not exist on type 'APICall'.
//   Property 'value' does not exist on type 'FailedAPICall'.
// ----------------------------------------------------
