// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(
      `The ${this.title} is writeen by ${this.author} and it was published in the year ${this.publicationYear}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Price: ${this.price}`);
  }
}

const myEbook = new Ebook("Rich Dad Poor Dad", "Robert T. Kiyosaki", 1997, 370);
myEbook.displayDetails();
