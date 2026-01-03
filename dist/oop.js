// class
class BankAccount {
    accountName;
    balance;
    accountType;
    constructor(name, amount) {
        this.accountName = name;
        this.balance = amount;
        this.accountType = "Savings";
    }
    showBalance() {
        console.log(`Your Balance is : ${this.balance}`);
    }
}
const account1 = new BankAccount("Md. Hasanujjaman", 1000);
account1.showBalance();
// inheritence
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is running`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking woof woof`);
    }
}
const myDog = new Dog("Kitty");
myDog.move();
myDog.bark();
class Car {
    start() {
        console.log("Car is Started...");
    }
    stop() {
        console.log("Car is stoped");
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
export {};
//# sourceMappingURL=oop.js.map