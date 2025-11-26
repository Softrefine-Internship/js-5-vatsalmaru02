// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  addDepartment(departmentName) {
    this.departments.push(departmentName);
    console.log(
      `Department "${departmentName}" added to ${this.universityName}`
    );
  }

  removeDepartment(departmentName) {
    this.departments = this.departments.filter(
      (department) => department !== departmentName
    );
    console.log(
      `Department "${departmentName}" removed from ${this.universityName}`
    );
  }

  displayAllDepartments() {
    console.log(`Departments of ${this.universityName} :`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1} . ${department}`);
    });
  }

  displayDetails() {
    console.log(`Total Departments: ${this.departments.length}`);
  }
}

const myUniversity = new University("Dr Shubhash University");

myUniversity.addDepartment("B.Tech Computer Science");
myUniversity.addDepartment("BBA");
myUniversity.addDepartment("MBBS");
myUniversity.displayAllDepartments();

myUniversity.removeDepartment("MBBS");
myUniversity.displayAllDepartments();

myUniversity.displayDetails();
