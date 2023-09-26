const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -3);
  });

  it('should return the subtraction of two rounded numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
  });

  it('should return the division of two rounded numbers when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
  });

  it('should return "Error" when trying to divide by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0), 'Error');
  });

//   it('should throw an error for invalid type', () => {
//     assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid type/);
//   });
});
