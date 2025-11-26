// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branchName) {
    this.branches.push(branchName);
    console.log(`Branch "${branchName}" added to ${this.bankName}.`);
  }

  removeBranch(branchName) {
    this.branches = this.branches.filter((branch) => branch !== branchName);
    console.log(`Branch "${branchName}" removed from ${this.bankName}.`);
  }

  displayAllBranches() {
    console.log(`Branches of ${this.bankName}:`);
    this.branches.forEach((branch, index) => {
      console.log(`${index + 1} . ${branch}`);
    });
  }

  displayDetails() {
    console.log(`Total Branches: ${this.branches.length}`);
  }
}
const myBank = new Bank("Global Bank");
myBank.addBranch("Downtown");
myBank.addBranch("Uptown");
myBank.displayAllBranches();
myBank.removeBranch("Downtown");
myBank.displayAllBranches();

myBank.displayDetails();
