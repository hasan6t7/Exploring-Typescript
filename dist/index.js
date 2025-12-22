"use strict";
// primitive data type
Object.defineProperty(exports, "__esModule", { value: true });
// string
let studentName = "Xyz";
studentName = "Hasanujjaman";
// number
let age = 21;
age = 25;
// boolean
let isMarried = true;
isMarried = false;
// Array and tuples
// Array
let score = [90, 85, 97];
let score2 = [95, 85, 97];
console.log(score2[0]);
// Tuples
let student = ["Hasan", 21, false];
console.log(student[0]);
// any type
let random = "xyz";
random = 21;
random = true;
// unknown type
let value = "world";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// void type
function messageLogger() {
    console.log("logged successful");
}
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Typescript"));
// undefined type
let name;
console.log(name);
let notAssaigned = undefined;
// null
let nothing = null;
const student4 = {
    name: "Hasan",
    age: 21,
    isMarried: false,
    courses: ["react", "redux", "typescript"],
    scores: [90, 95, 91],
    info: ["Hasan", 21, false],
};
const student5 = {
    name: "Shawon",
    age: 21,
    isMarried: true,
    courses: ["react", "redux", "typescript", "nodejs"],
    scores: [90, 95, 91],
    info: ["Hasan", 21, false],
};
function displayStudent(student) {
    console.log(`Name :  ${student.name}`);
    console.log(`Age :  ${student.age}`);
    console.log(`Courses :  ${student.courses.join(" , ")}`);
}
displayStudent(student4);
//# sourceMappingURL=index.js.map