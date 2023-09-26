const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and the provided arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', totalAmount, totalShipping)).to.be.true;

    // Restore the spy to prevent interference with other tests
    calculateNumberSpy.restore();
  });
});
