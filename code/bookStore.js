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

module.exports = BookStore;
