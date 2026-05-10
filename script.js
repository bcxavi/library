const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

function displayBooks(myLibrary) {
  const tbody = document.querySelector(".books-table-body");

  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");
    if (book.read) {
      readCell.textContent = "Yes";
    } else {
      readCell.textContent = "No";
    }

    const deleteCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.dataset.id = book.id;

    deleteButton.addEventListener("click", () => {
      deleteBook(book.id);
    });

    deleteCell.appendChild(deleteButton);

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-btn");
    if (book.read) {
      toggleButton.textContent = "Mark as Unread";
    } else {
      toggleButton.textContent = "Mark as Read";
    }

    deleteCell.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
      book.toggleRead();

      displayBooks(myLibrary);
    });

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  }
}

const addBookBtn = document.querySelector(".add-book-btn");
const bookForm = document.querySelector(".book-form");

addBookBtn.addEventListener("click", () => {
  bookForm.classList.toggle("show");
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  displayBooks(myLibrary);

  bookForm.reset();
});

function deleteBook(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) return;

  myLibrary.splice(bookIndex, 1);

  displayBooks(myLibrary);
}
