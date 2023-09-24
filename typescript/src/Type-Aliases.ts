//Type Aliases allows us to write custom types in typescript

// let courseDiscount = 25;
// courseDiscount = 5;

// type CourseDiscount = number

// let courseDiscount: CourseDiscount = 25;
// courseDiscount = 5;

 //--------------------------------------------------------------
 //This is call literal type
//  type CourseDiscount = 25 | 35 | 45 | 75;
// let courseDiscount: CourseDiscount = 35;

//--------------------------------------------------------------

//Type aliases cannot have value they can only contain types
// type TSCourse = "TS";
// let courseName: TSCourse = "TS"

//--------------------------------------------------------------

type MyCourses = {
    name: string;
    price: number;
}


const tsCourse: MyCourses = {
    name: "TS Bootcamp",
    price: 10.00
};

const jsCourse:MyCourses ={
    name:"JS Bootcamp",
    price: 19.00,
};



