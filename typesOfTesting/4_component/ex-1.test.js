/* 
Component Testing
  Purpose: Tests individual components of an application in isolation from the rest of the system.
*/
const request = require('supertest');
const app = require('../../code/app');

describe('Component Test: GET /books', () => {
  beforeEach(() => {
    books = [];
  });

  test('should return a list of books', async () => {
    const book = { title: 'Clean Code', author: 'Robert C. Martin' };

    // Add a book
    await request(app).post('/books').send(book).expect(201);

    // Retrieve the book
    const response = await request(app)
      .get('/books')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual(expect.arrayContaining([book]));
  });
});
