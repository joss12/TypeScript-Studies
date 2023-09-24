/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Based on the below array of search history of a user, return “Would you like to learn how to create websites for free?” if there is a keyword html or css
*/

let searchHistory: string[] = [
  "how to make money online",
  "benefits of eating garlic",
  "html css tutorial",
  "calisthenics",
];

// for(let searchItem of searchHistory){
//   searchItem.split("");
//   for(let entry of searchItem){
//     if(entry === "html" || entry === "css"){
//       console.log("create web page")
//     }
//   }
// }

// ----------------------------------------------------
searchHistory.map((entry)=>{
  if(entry.includes("html") || entry.includes("css")){
    console.log("Web application")
  }
})
// ----------------------------------------------------
