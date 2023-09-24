// type Course = {
//   name: string;
//   price: number;
// };

//Original mapped types
// type Product = {[ course in "TS" | "JS"]: Course};

//First Iteration
// type RecordTYPE <KeyType, valueType> = {[ Key  in KeyType]: valueType};

//Second Iteration
// type RecordTYPE<KeyType extends string, valueType> = {
//   [key in KeyType]: valueType;
// };

// type Record<K extends keyof any, T> = {
//     [P in K]: T
// }

// let recordKeyType: keyof any;

// function getCourseInfo(course: Product) {
//   return course;
// }

// function getCourseInfo<U extends string, T>(course: RecordTYPE<U, T>) {
//   return course;
// }

// let course = getCourseInfo({
//   TS: { name: "TS", price: 10.99 },
//   JS: { name: "JS", price: 9.99 },
//   PHP:  { name: "PHP", price: 11.99 },
// });

// console.log(course);
