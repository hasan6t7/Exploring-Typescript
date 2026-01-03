// error
function throwError() {
    throw new Error("Something Went Wrong!!");
}
// throwError();
// arrow function
export const add = (a, b) => {
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
// type guards
// type of typeguards
function display(value) {
    if (typeof value === "string") {
        console.log("It's a string : ", value.toUpperCase());
    }
    else {
        console.log("It's a number : ", value.toFixed(3));
    }
}
display("Mern Stack development");
display(5500.546421);
function move(vichale) {
    if ("drive" in vichale) {
        vichale.drive();
    }
    else {
        vichale.sail();
    }
}
const car = {
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
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
function isFish(pet) {
    return pet.swim !== undefined;
}
function move1(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish = {
    swim: () => console.log("Fish is swiming"),
};
const myBird = {
    fly: () => console.log("Brid is Flying"),
};
move1(myBird);
//# sourceMappingURL=app.js.map