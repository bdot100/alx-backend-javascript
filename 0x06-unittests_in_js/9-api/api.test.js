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

  it('Check Content Length', (done) => {
    request(app)
      .get('/')
      .expect('Content-Length', '29') // Ensure the Content-Length is equal to 29
      .end(done);
  });

  it('Correct status code when :id is a number?', (done) => {
      request(app)
        .get('/cart/123') // Replace with a valid cart ID
        .expect(200)
        .end(done);
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request(app)
        .get('/cart/abc') // Replace with a non-numeric ID
        .expect(404)
        .end(done);
    });

});
