/* 
Acceptance Test-Driven Development (ATDD)
  Definition: ATDD involves writing acceptance tests from the user’s perspective before writing any code. It ensures the development team understands the customer requirements before development.
*/

const request = require('supertest');
const app = require('../code/app');

describe('Book Store API', () => {
  beforeEach(() => {
    books = [];
  });

  test('should add a book and retrieve it by title', async () => {
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
