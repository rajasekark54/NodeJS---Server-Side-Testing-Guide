/* 
Purpose: Ensures that the backend system is secure from vulnerabilities, threats, and risks.

Tools: OWASP ZAP, custom scripts
*/

// security.test.js
const request = require('supertest');
const app = require('../../code/app');

describe('Security Tests', () => {
  beforeEach(() => {
    books = [];
  });

  test('should not have SQL injection vulnerability', async () => {
    const response = await request(app)
      .get('/books?title=Clean%27%3B%20DROP%20TABLE%20books%3B--')
      .expect(400); // expecting bad request or a safe error

    expect(response.body).toEqual(expect.arrayContaining([]));
  });

  test('should have proper authentication for sensitive endpoints', async () => {
    await request(app).get('/admin').expect(401); // expecting unauthorized access without token
  });
});
