// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
  display() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    console.log(`Annual Salary: ${this.calculateAnnualSalary()}`);
  }
}
class Manager extends Employee {
  constructor(name, salary, department, bonus = 0) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }
  calculateAnnualSalary() {
    const baseAnnualSalary = super.calculateAnnualSalary();
    console.log(`Annual Salary (before bonus): ${baseAnnualSalary}`);
    return baseAnnualSalary + this.bonus;
  }
  display() {
    super.display();
    console.log(`Department: ${this.department}`);
  }
}
const manager1 = new Manager("Alice", 5000, "Sales", 12000);
const manager2 = new Manager("Bob", 6000, "Marketing", 10000);
manager1.display();
manager2.display();
