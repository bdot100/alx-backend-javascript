const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the expected response for success', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Check if the response matches the expected data
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the async test has completed
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });
});
