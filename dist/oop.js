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
//# sourceMappingURL=oop.js.map