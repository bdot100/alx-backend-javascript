const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js'); // Update the import to use the new file

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.4, -4.5)).to.equal(-3);
  });

  it('should return the subtraction of two rounded numbers when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
  });

  it('should return the division of two rounded numbers when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
  });

  it('should return "Error" when trying to divide by 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, -0)).to.equal('Error');
  });

//   it('should throw an error for invalid type', () => {
//     expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(/Invalid type/);
//   });
});
