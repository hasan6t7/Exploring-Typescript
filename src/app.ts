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

const add2 = (x: number, y: number) => x + y; //implicit return
console.log(add2(66, 66));

// literal type

type Action = "start" | "pasue" | "stop" | "submit" | "reset";

function handleAction(action: Action) {
  console.log(`Action : ${action}`);
}

handleAction("start");
handleAction("pasue");
handleAction("stop");

// type narrowing

function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

log("Its me hasan");
log(5.635745447);

// handle form input

function proccessInput(input: string | number) {
  if (typeof input === "number") {
    console.log("Parsed as number : ", input * 3);
  } else {
    console.log("Parsed as string : ", input.trim());
  }
}

proccessInput("       I am a full stack web developer          ");
proccessInput(10);
