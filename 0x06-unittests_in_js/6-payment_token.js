function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // Return a rejected promise for failure
        reject(new Error('API request failed'));
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
  