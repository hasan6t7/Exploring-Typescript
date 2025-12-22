// primitive data type

// string

let studentName: string = "Xyz";
studentName = "Hasanujjaman";

// number

let age: number = 21;
age = 25;

// boolean

let isMarried: boolean = true;
isMarried = false;

// Array and tuples

// Array

let score: number[] = [90, 85, 97];
let score2: Array<number> = [95, 85, 97];
console.log(score2[0]);

// Tuples

let student: [string, number, boolean] = ["Hasan", 21, false];
console.log(student[0]);

// any type

let random: any = "xyz";
random = 21;
random = true;

// unknown type

let value: unknown = "world";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// void type

function messageLogger(): void {
  console.log("logged successful");
}

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Typescript"));

// undefined type
let name;
console.log(name);

let notAssaigned: undefined = undefined;

// null
let nothing: null = null;

type students = {
  name: string;
  age: number;
  isMarried: boolean;
  courses: Array<string>;
  scores: number[];
  info: [string, number, boolean];
};

const student4: students = {
  name: "Hasan",
  age: 21,
  isMarried: false,
  courses: ["react", "redux", "typescript"],
  scores: [90, 95, 91],
  info: ["Hasan", 21, false],
};
const student5: students = {
  name: "Shawon",
  age: 21,
  isMarried: true,
  courses: ["react", "redux", "typescript", "nodejs"],
  scores: [90, 95, 91],
  info: ["Hasan", 21, false],
};

function displayStudent(student: students): void {
  console.log(`Name :  ${student.name}`);
  console.log(`Age :  ${student.age}`);
  console.log(`Courses :  ${student.courses.join(" , ")}`);
}

displayStudent(student4)
