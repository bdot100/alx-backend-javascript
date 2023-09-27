const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(body).to.contain("Payment methods for cart 12");
	    done();
	});
    });
    it("check correct status code for incorrect url", function(done) {
	request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});

// const request = require('supertest');
// const app = require('./api');

// describe('API Tests', () => {
//   it('Check Correct status code', (done) => {
//     request(app)
//       .get('/')
//       .expect(200)
//       .end(done);
//   });

//   it('Check Correct result', (done) => {
//     request(app)
//       .get('/')
//       .expect('Welcome to the payment system')
//       .end(done);
//   });

//   it('Check Content Length', (done) => {
//     request(app)
//       .get('/')
//       .expect('Content-Length', '29') // Ensure the Content-Length is equal to 29
//       .end(done);
//   });

//   it('Correct status code when :id is a number?', (done) => {
//       request(app)
//         .get('/cart/123') // Replace with a valid cart ID
//         .expect(200)
//         .end(done);
//     });

//     it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
//       request(app)
//         .get('/cart/abc') // Replace with a non-numeric ID
//         .expect(404)
//         .end(done);
//     });

// });
