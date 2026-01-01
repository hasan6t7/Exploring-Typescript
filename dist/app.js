"use strict";
// error
Object.defineProperty(exports, "__esModule", { value: true });
function throwError() {
    throw new Error("Something Went Wrong!!");
}
// throwError();
// arrow function
const add = (a, b) => {
    return a + b;
};
console.log(add(33, 33));
const add2 = (x, y) => x + y; //implicit return
console.log(add2(66, 66));
function handleAction(action) {
    console.log(`Action : ${action}`);
}
handleAction("start");
handleAction("pasue");
handleAction("stop");
// type narrowing
function log(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
log("Its me hasan");
log(5.635745447);
// handle form input
function proccessInput(input) {
    if (typeof input === "number") {
        console.log("Parsed as number : ", input * 3);
    }
    else {
        console.log("Parsed as string : ", input.trim());
    }
}
proccessInput("       I am a full stack web developer          ");
proccessInput(10);
//# sourceMappingURL=app.js.map