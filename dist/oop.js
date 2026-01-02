"use strict";
// class
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log("Woof Woof!!!");
    }
}
const myDog = new Dog("Kitty");
myDog.move();
myDog.bark();
//# sourceMappingURL=oop.js.map