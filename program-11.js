// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Deposited ${amount} into account of ${this.accountHolderName}. New balance: ${this.balance}.`
      );
    } else {
      console.log("Deposit amount must be positive.");
    }
    return this;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Withdrew ${amount} from account of ${this.accountHolderName}. New balance: ${this.balance}.`
      );
    } else if (amount > this.balance) {
      console.log(
        `Insufficient balance in account of ${this.accountHolderName}.`
      );
    } else {
      console.log("Withdrawal amount must be positive.");
    }
    return this;
  }

  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      console.log(
        `Transferred ${amount} from ${this.accountHolderName} to ${targetAccount.accountHolderName}.`
      );
    } else if (amount > this.balance) {
      console.log("Insufficient balance for transfer.");
    } else {
      console.log("Transfer amount must be positive.");
    }
    return this;
  }

  displayDetails() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolderName}`);
    console.log(`Balance: ${this.balance}`);
    return this;
  }
}

const account1 = new BankAccount("123", "Vatsal", 1000);
const account2 = new BankAccount("456", "Pratik", 5000);

account1.withdraw(500).deposit(1000).transfer(500, account2).displayDetails();
account2.deposit(200).withdraw(100).displayDetails();
