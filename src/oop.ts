// class

class BankAccount {
  public accountName: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, amount: number) {
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
  constructor(public name: string) {}

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
