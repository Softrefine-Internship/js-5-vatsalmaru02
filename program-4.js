// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.balance}.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
    return this;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.balance}.`);
    } else if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
    return this;
  }

  getAccountNumber() {
    console.log(`Account number: ${this.accountNumber}.`);
    return this;
  }

  displayDetails() {
    console.log(`Account number: ${this.accountNumber}`);
    console.log(`Total balance: ${this.balance}`);
    return this;
  }
}
const account1 = new BankAccount("123456", 500);


account1.deposit(300).withdraw(50).displayDetails();
