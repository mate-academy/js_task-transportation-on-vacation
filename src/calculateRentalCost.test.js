'use strict';

const calculateRentalCost = require('./calculateRentalCost');

test('Should add an additional discount for 1 and more days of rent', () => {
  expect(calculateRentalCost(1))
    .toBe(40);
});
test(`Do not add any discount for less than 3 days`, () => {
  expect(calculateRentalCost(3))
    .toBe(100);
});
test('Should add the basic discount for 7 days of rent', () => {
  expect(calculateRentalCost(7))
    .toBe(230);
});
