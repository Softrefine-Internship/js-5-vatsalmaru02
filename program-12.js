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
    return this;
  }

  removeDepartment(departmentName) {
    this.departments = this.departments.filter(
      (department) => department !== departmentName
    );
    console.log(
      `Department "${departmentName}" removed from ${this.universityName}`
    );
    return this;
  }

  displayAllDepartments() {
    console.log(`Departments of ${this.universityName} :`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1} . ${department}`);
    });
    return this;
  }

  displayDetails() {
    console.log(`Total Departments: ${this.departments.length}`);
    return this;
  }
}

const myUniversity = new University("Dr Shubhash University");



myUniversity
  .addDepartment("MBA")
  .addDepartment("BCA")
  .removeDepartment("BBA")
  .displayAllDepartments()
  .displayDetails();
