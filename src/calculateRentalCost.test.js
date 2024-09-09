'use strict';

const calculateRentalCost = require('./calculateRentalCost');

test('Should not apply any discount for less than 3 days of rental', () => {
  const expectedCost = 2 * 40;  // 80

  expect(calculateRentalCost(2)).toBe(expectedCost);
});

test('Should apply the medium-term discount for 3 days of rental', () => {
  const expectedCost = (3 * 40) - 20;  // 100

  expect(calculateRentalCost(3)).toBe(expectedCost);
});

test('Should apply the medium-term discount for 6 days of rental', () => {
  const expectedCost = (6 * 40) - 20;  // 220

  expect(calculateRentalCost(6)).toBe(expectedCost);
});

test('Should apply the long-term discount for 7 or more days of rental', () => {
  const expectedCost = (7 * 40) - 50;  // 230

  expect(calculateRentalCost(7)).toBe(expectedCost);
});
