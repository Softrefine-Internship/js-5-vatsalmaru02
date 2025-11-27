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
    return this;
  }

  displayArea() {
    console.log(`Area: ${this.calculateArea()}`);
    return this;
  }

  displayPerimeter() {
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    return this;
  }

}

const rectangle = new Rectangle(5, 10);


rectangle.displayDetails().displayArea().displayPerimeter();