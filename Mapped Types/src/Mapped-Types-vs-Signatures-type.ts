// type Course = {
//   name: string;
//   price: number;
// };

// type Product<T> = { [k: string]: T };

// function getCourseInfo<T>(course: Product<T>) {
//   return course;
// }

// let courses = getCourseInfo<Course>({
//   course_1: { name: "TS", price: 19.88 },
//   course_2: { name: "JS", price: 19.88 },
//   course_3: { name: "C#", price: 19.88 },
// });

// console.log(courses);


//--------------------------------------- Mapped type

// type Course = {
//   name: string;
//   price: number;
// };


//mapped type
// type Product= { [course in "TS" | "JS"]: Course };

//index signature
//  type Product= { [course: "TS" | "JS"]: Course };

// function getCourseInfo(course: Product) {
//   return course;
// }

// let courses = getCourseInfo({
//   TS: { name: "TS", price: 19.88 },
//   JS: { name: "JS", price: 19.88 },
// });

// console.log(courses);




// type Product<T> = { [k: string]: T };
// type ProductClone = {[course in string]: course}