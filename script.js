const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
console.log(theHobbit.author);
console.log(theHobbit.id);
