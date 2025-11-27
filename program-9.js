// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branchName) {
    this.branches.push(branchName);
    console.log(`Branch "${branchName}" added to ${this.bankName}.`);
    return this;
  }

  removeBranch(branchName) {
    this.branches = this.branches.filter((branch) => branch !== branchName);
    console.log(`Branch "${branchName}" removed from ${this.bankName}.`);
    return this;
  }

  displayAllBranches() {
    console.log(`Branches of ${this.bankName}:`);
    this.branches.forEach((branch, index) => {
      console.log(`${index + 1} . ${branch}`);
    });
    return this;
  }

  displayDetails() {
    console.log(`Total Branches: ${this.branches.length}`);
    return this;
  }
}
const myBank = new Bank("Global Bank");

myBank
  .addBranch("Midtown")
  .addBranch("Suburban")
  .removeBranch("Uptown")
  .displayAllBranches()
  .displayDetails();
