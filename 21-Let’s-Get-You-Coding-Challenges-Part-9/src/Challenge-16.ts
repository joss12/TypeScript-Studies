/* *-*-*-*-*-*-*-*-*-*-* Challenge 16 ------------------
What will the course variable log?
*/

interface Product {
  name: string;
}

class TSCourse implements Product {
  constructor(public name: number) {}
}

let course = new TSCourse("TS Bootcamp");
console.log(course);
/**
 * Class 'TSCourse' incorrectly implements interface 'Product'.
  Types of property 'name' are incompatible.
    Type 'number' is not assignable to type 'string'.
 */

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
