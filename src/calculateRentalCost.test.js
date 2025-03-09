'use strict';

const calculateRentalCost = require('./calculateRentalCost');

describe('calculateRentalCost', () => {
  test('applies no discount for less than 3 days', () => {
    expect(calculateRentalCost(2)).toBe(80);
  });

  test('applies short-term discount for 3 days', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });

  test('applies short-term discount for 6 days', () => {
    expect(calculateRentalCost(6)).toBe(220);
  });

  test('applies long-term discount for 7 days', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
});