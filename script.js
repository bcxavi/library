const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);

  console.log(book);
  console.log(myLibrary);
}

addBookToLibrary("The Hobbit", "Tolkien", 295, false);
addBookToLibrary("Harry Potter", "J.K Rowling", 500, true);
