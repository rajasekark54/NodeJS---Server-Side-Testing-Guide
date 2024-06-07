/* 
Unit Testing
  Purpose: Unit testing involves testing individual components or functions in isolation to ensure they work as expected.
*/

const { BookStore } = require('../../code/bookStore');

describe('BookStore', () => {
  let store;

  beforeEach(() => {
    store = new BookStore();
  });

  test('should add a book to the store', () => {
    store.addBook({ title: 'Clean Code', author: 'Robert C. Martin' });
    expect(store.getBooks()).toHaveLength(1);
  });
});
