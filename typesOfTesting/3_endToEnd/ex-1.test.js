/* 
End-to-end testing
  Purpose: End-to-end testing verifies that the entire application flow works as expected, simulating real user scenarios from start to finish.

Scope: Backend only, focusing on API endpoints, database interactions, and service integrations.
*/

const request = require('supertest');
const app = require('../../code/app');

describe('End-to-End Test: Book Store Workflow', () => {
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
