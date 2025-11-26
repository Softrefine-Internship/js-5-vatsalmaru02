// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productID, name, price) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }

  displayDetails() {
    console.log(
      `Product ID: ${this.productID}, Name: ${this.name}, Price: ${this.price}`
    );
  }

  displayTotalprice(quantity) {
    const totalPrice = this.calculateTotalPrice(quantity);
    console.log(`Total Price: ${totalPrice}`);
  }
}

class PersonalCareProduct extends Product {
  constructor(productID, name, price, warrantyPeriod) {
    super(productID, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
    const baseTotalPrice = super.calculateTotalPrice(quantity);
    console.log(`Base Total Price (without warranty): ${baseTotalPrice}`);
    const warrantyCost = 10;
    return baseTotalPrice + warrantyCost;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Warranty Period: ${this.warrantyPeriod} years`);
  }
  displayTotalprice(quantity) {
    const totalPrice = this.calculateTotalPrice(quantity);
    console.log(`Total Price: ${totalPrice}`);
  }
}

const myPersonalCareProduct = new PersonalCareProduct(101, "Shampoo", 15, 2);
myPersonalCareProduct.displayDetails();
myPersonalCareProduct.displayTotalprice(3);
