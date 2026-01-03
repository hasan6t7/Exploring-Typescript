// error

function throwError(): never {
  throw new Error("Something Went Wrong!!");
}

// throwError();

// arrow function

export const add = (a: number, b: number): number => {
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

// type guards

// type of typeguards

function display(value: string | number) {
  if (typeof value === "string") {
    console.log("It's a string : ", value.toUpperCase());
  } else {
    console.log("It's a number : ", value.toFixed(3));
  }
}

display("Mern Stack development");
display(5500.546421);

// in operator type guards

type Car = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function move(vichale: Car | Boat) {
  if ("drive" in vichale) {
    vichale.drive();
  } else {
    vichale.sail();
  }
}

const car: Car = {
  drive: () => {
    console.log("car is driving");
  },
};

move(car);

// instanceof guards

class Dog {
  bark() {
    console.log("Woof Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);

// custom type guards

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move1(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const myFish: Fish = {
  swim: () => console.log("Fish is swiming"),
};

const myBird: Bird = {
  fly: () => console.log("Brid is Flying"),
};

move1(myBird);



