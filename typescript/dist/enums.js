"use strict";
var RollNumbers;
(function (RollNumbers) {
    RollNumbers[RollNumbers["Eddy"] = 1] = "Eddy";
    RollNumbers[RollNumbers["Grace"] = 2] = "Grace";
    RollNumbers[RollNumbers["Stan"] = 3] = "Stan";
    RollNumbers[RollNumbers["Elike"] = 4] = "Elike";
    RollNumbers[RollNumbers["Joss"] = 5] = "Joss";
})(RollNumbers || (RollNumbers = {}));
var studentDetails;
(function (studentDetails) {
    studentDetails[studentDetails["ID"] = 1] = "ID";
    studentDetails["Name"] = "Eddy";
    studentDetails["Major"] = "Art";
})(studentDetails || (studentDetails = {}));
;
let studentId = 1;
let studentName = "Eddy";
let studentMajor = "Art";
console.log(`${studentId} - ${studentName} Has a major in ${studentMajor}`);
