/* 
Domain-Driven Design (DDD)
  Definition: DDD is a software design approach focusing on the core domain logic and complex domain designs. It involves modeling the domain based on input from domain experts.
*/

const { BookStore, Book } = require('../code/bookStore');

describe('BookStore', () => {
  let store;

  beforeEach(() => {
    store = new BookStore();
  });

  test('should add a book to the store', () => {
    const book = new Book('Clean Code', 'Robert C. Martin');
    store.addBook(book);
    expect(store.getBooks()).toContainEqual(book);
  });
});
