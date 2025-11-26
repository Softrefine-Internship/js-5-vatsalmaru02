0//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
  displayDetails() {
    console.log(`Width: ${this.width}, Height: ${this.height}`);
  }
  displayArea() {
    console.log(`Area: ${this.calculateArea()}`);
  }
  displayPerimeter() {
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
  }
}
const rectangle = new Rectangle(5, 10);
rectangle.displayDetails();
rectangle.displayArea();
rectangle.displayPerimeter();
