"use strict";
var Courses;
(function (Courses) {
    Courses[Courses["TS"] = 0] = "TS";
    Courses[Courses["JS"] = 1] = "JS";
})(Courses || (Courses = {}));
function setCoursePrice(course) {
    switch (course) {
        case Courses.TS:
            return "$29.99";
        case Courses.JS:
            return "$25.99";
        default:
            courseWarning(course);
    }
}
console.log(setCoursePrice(Courses.TS));
console.log(setCoursePrice(Courses.JS));
function courseWarning(course) {
    throw new Error(`Course ${course} has not been priced.`);
}
