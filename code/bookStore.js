class BookStore {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

module.exports = { BookStore, Book };
