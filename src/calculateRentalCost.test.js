'use strict';

const calculateRentalCost = require('./calculateRentalCost');

test(`Do not add any discount for less than 3 days`, () => {
  expect(calculateRentalCost(2))
    .toBe(80);
});

test('Should add the basic discount from 3 to 6 days of rent', () => {
  expect(calculateRentalCost(3))
    .toBe(100);
});

test('Should add the basic discount from 3 to 6 days of rent', () => {
  expect(calculateRentalCost(6))
    .toBe(220);
});

test('Should add an additional discount for 7 and more days of rent', () => {
  expect(calculateRentalCost(7))
    .toBe(230);
});
