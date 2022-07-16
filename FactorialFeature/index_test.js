var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('checks if 5! equals 120', () => {
      const inputNumber = 5;
      const expectedResult = 120;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
    it('checks if 3! equals 6', () => {
      const inputNumber = 3;
      const expectedResult = 6;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
    it('checks if 0! equals 1', () => {
      const inputNumber = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
  });
});
