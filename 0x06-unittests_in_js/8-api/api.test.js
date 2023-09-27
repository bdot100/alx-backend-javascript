const request = require('supertest');
const app = require('./api');

describe('API Tests', () => {
  it('Check Correct status code', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });

  it('Check Correct result', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system')
      .end(done);
  });

  it('Check Other?', (done) => {
    request(app)
      .get('/')
      .expect('Content-Length', '29') // Ensure the Content-Length is equal to 29
      .end(done);
  });
});
