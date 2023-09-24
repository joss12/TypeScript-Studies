/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a custom type and assign it both boolean values
*/

// ----------------------------------------------------
type BoolValues = true | false 
// console.log(BoolValues)
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
What will be the value of variable score?
*/

// type Score = number;
// let avgScore: string = "11.5";
// let score: Score = avgScore;

// ----------------------------------------------------
// Type 'string' is not assignable to type 'number'
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
What will be the value of variable score?
*/

type Score = number;
let avgScore: number = 11.5;
let score: Score = avgScore;
console.log(score)

// ----------------------------------------------------
console.log(score); //11.5
// ----------------------------------------------------
