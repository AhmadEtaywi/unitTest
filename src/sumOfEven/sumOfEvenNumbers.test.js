
const sumOfEvenNumbers = require('./sumOfEvenNumbers');

describe('sumOfEvenNumbers', () => {
  it('should return sum of all even numbers in the array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sumOfEvenNumbers(nums)).toBe(30);
  });

  it('should return 0 for an empty array', () => {
    const nums = [];
    expect(sumOfEvenNumbers(nums)).toBe(0);
  });

  it('should return 0 for an array with no even numbers', () => {
    const nums = [1, 3, 5, 7, 9];
    expect(sumOfEvenNumbers(nums)).toBe(0);
  });

  it('should return 0 for an array of negative numbers', () => {
    const nums = [-1, -3, -5, -7];
    expect(sumOfEvenNumbers(nums)).toBe(0);
  });
});
