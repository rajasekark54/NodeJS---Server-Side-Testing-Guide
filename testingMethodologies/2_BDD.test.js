/* 
Behavior-Driven Development (BDD)
  Definition: BDD is an extension of TDD that encourages collaboration between developers, QA, and non-technical or business participants. It emphasizes examples to clarify requirements and tests.
*/

const { BookStore } = require('../code/bookStore');

describe('BookStore', () => {
  let store;

  beforeEach(() => {
    store = new BookStore();
  });

  test('should add a book to the store', () => {
    store.addBook({ title: 'Clean Code', author: 'Robert C. Martin' });
    expect(store.getBooks()).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: 'Clean Code' })])
    );
  });
});
