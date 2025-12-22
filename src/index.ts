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
