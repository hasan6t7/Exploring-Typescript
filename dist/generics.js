"use strict";
// without generics
Object.defineProperty(exports, "__esModule", { value: true });
function logString(data) {
    console.log(data);
}
function logNumber(data) {
    console.log(data);
}
function logBoolean(data) {
    console.log(data);
}
logString("Hasan");
logNumber(22);
logBoolean(true);
// with generics
function logData(data) {
    console.log(data);
}
logData("Hasanujjaman");
logData(22);
logData(true);
//# sourceMappingURL=generics.js.map