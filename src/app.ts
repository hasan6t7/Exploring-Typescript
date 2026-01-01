// error

function throwError(): never {
  throw new Error("Something Went Wrong!!");
}

// throwError();

// arrow function

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(33, 33));

const add2 = (x: number, y: number) => x + y;  //implicit return
console.log(add2(66,66))