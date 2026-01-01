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
//# sourceMappingURL=app.js.map