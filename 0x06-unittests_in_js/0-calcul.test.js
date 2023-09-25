const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {

it('it round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.7, 0), 2);
    });

    it('it round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
    });

    it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
    });

  it(`checking if numbers round`, function() {
    const res = calculateNumber(1, 2);
    assert.strictEqual(res, 3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(1.4, 2.2);
    assert.strictEqual(res, 3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(1.6, 2.7);
    assert.strictEqual(res, 5);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(-1.4, -1.3);
  assert.strictEqual(res, -2);
  });
});
