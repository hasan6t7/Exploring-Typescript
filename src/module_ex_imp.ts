import multiplyNumber, { add, greet } from "./utils.js";
import { add as addition } from "./app.js";

console.log(greet("Hasan"));

console.log(multiplyNumber(10, 6));
console.log("util add", add(10, 23));
console.log("app.js add", addition(25, 25));
