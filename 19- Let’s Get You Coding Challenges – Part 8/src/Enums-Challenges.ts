/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a group of five constants for five products of your choice and initialize the enum with 1
*/

// ----------------------------------------------------
enum Products {
  "TS" = 1,
  "JS" = 2,
  "PHP" = 3,
  "C#" = 4,
  "Laravel" = 5,
}
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Perform an exhaustiveness checking for the previous enum and return their prices
*/

// ----------------------------------------------------
function setCoursePrice(course: Products) {
  switch (course) {
    case Products["TS"]:
      return 10.22;
    case Products["JS"]:
      return "$9.77";
    case Products["PHP"]:
      return "$12.99";
    case Products["C#"]:
      return "$16.88";
    case Products["Laravel"]:
      return "$19.99";
    default:
      courseWarning(course);
  }
}

function courseWarning(course: never): never{
    throw new Error(`Course${course} has not been priced.`)
}

console.log(setCoursePrice(Products["PHP"]));
console.log(setCoursePrice(Products["JS"]));
// ----------------------------------------------------
