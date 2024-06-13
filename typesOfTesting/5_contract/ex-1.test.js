// contract.test.js
const { Pact } = require('@pact-foundation/pact');
const path = require('path');
const request = require('supertest');

const provider = new Pact({
  consumer: 'BookStoreClient',
  provider: 'BookStoreService',
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});

describe('Pact with BookStoreService', () => {
  beforeEach(() => provider.setup());

  afterEach(() => provider.finalize());

  describe('when a request for books is made', () => {
    beforeEach(() => {
      return provider.addInteraction({
        uponReceiving: 'a request for books',
        withRequest: {
          method: 'GET',
          path: '/books',
          headers: { Accept: 'application/json' },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: [{ id: 1, title: 'Clean Code', author: 'Robert C. Martin' }],
        },
      });
    });

    it('should return the correct book list', (done) => {
      request(provider.mockService.baseUrl)
        .get('/books')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(
          200,
          [{ id: 1, title: 'Clean Code', author: 'Robert C. Martin' }],
          done
        );
    });
  });
});
