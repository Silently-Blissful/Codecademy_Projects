// Imports
// Step 1
const assert = require('assert');
// Step 2
const Rooster = require('../index.js');

// Description for Rooster
// Step 3
describe('Rooster', () => {
  // Description for .annouceDawn
  // Step 4
  describe('.annouceDawn', () => {
    // Test for Rooster.annouceDawn
    // Step 5
    it('returns a rooster call', () => {
      // Setup
      // Step 6.1
      const expected = 'cock-a-doodle-doo!';
      // Exercise
      // Step 6.2
      const actual = Rooster.announceDawn();
      // Verify
      // Step 6.3
      assert.equal(expected, actual);
    });
  });
  // Description for .timeAtDawn
  // Step 8
  describe('.timeAtDawn', () => {
    // Test for Rooster.timeAtDawn
    // Step 9.1
    it('returns its argument as a string', () => {
      // Setup
      // Step 9.2
      const inputNumber = 12;
      const expected = '12';
      // Excerise
      // Step 9.3
      const actual = Rooster.timeAtDawn(inputNumber);
      // Verify
      // Step 9.4
      assert.strictEqual(actual, expected);
    });
    // Test for Rooster.timeAtDawn below range
    // Step 10.1
    it('throws an error if passed a number less than 0', () => {
      // Setup
      // Step 10.2
      const inputNumber = -1;
      const expected = RangeError;
      // Verify
      // Step 10.3
      assert.throws(() => {
        // Excerise
        // Step 10.4
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    // Test for Rooster.timeAtDawn above range
    // Step 11.1
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      // Step 11.2
      const inputNumber = 24;
      const expected = RangeError;
      // Verify
      // Step 11.3
      assert.throws(() => {
        // Exercise
        // Step 11.4
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});
