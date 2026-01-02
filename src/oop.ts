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
account1.showBalance()
