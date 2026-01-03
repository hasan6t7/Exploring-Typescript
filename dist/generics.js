// without generics
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
const userResponse = {
    success: true,
    data: {
        name: "Hasan",
    },
};
const numberResponse = {
    success: true,
    data: 22,
};
const id1 = {
    id: 999999,
};
function getId(item) {
    return item.id;
}
const result = getId(id1);
console.log(`Id is ${result}`);
export {};
//# sourceMappingURL=generics.js.map