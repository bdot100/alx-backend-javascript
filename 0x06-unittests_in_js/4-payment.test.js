const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment'); // Update the import to use the new file
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10); // Stub Utils.calculateNumber to return 10
    consoleLogSpy = sinon.spy(console, 'log'); // Spy on console.log
  });

  afterEach(() => {
    calculateNumberStub.restore(); // Restore the stub after each test
    consoleLogSpy.restore(); // Restore the spy after each test
  });

  it('should call Utils.calculateNumber with type SUM, a = 100, and b = 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
