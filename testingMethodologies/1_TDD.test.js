/* 
Test-Driven Development (TDD)
  Definition: TDD is a software development process where tests are written before the code. It emphasizes writing minimal code necessary to pass the tests.

Cycle:
  Write a test.
  Run all tests and see if the new test fails.
  Write the code.
  Run tests.
  Refactor code.
  Repeat.
*/

const BookStore = require('../code/bookStore');

describe('TDD - BookStore', () => {
  let store;

  beforeEach(() => {
    store = new BookStore();
  });

  test('should add a book to the store', () => {
    store.addBook({ title: 'Clean Code', author: 'Robert C. Martin' });
    expect(store.getBooks()).toHaveLength(1);
  });
});
