/* 
Integration Testing
  Purpose: Integration testing focuses on verifying that different modules or services in an application work together correctly.
*/

const request = require('supertest');
const app = require('../../code/app');

describe('Integration Test: GET /books', () => {
  beforeEach(() => {
    books = [];
  });

  test('should retrieve books from the database', async () => {
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
