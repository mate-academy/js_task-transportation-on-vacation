'use strict';

const total = require('./calculateRentalCost');

test(`Do not add any discount for less than 3 days`, () => {
  expect(total(2))
    .toBe(80);
});

test('Should add the basic discount from 3 to 6 days of rent', () => {
  expect(total(3))
    .toBe(100);
});

test('Should add the basic discount from 3 to 6 days of rent', () => {
  expect(total(6))
    .toBe(220);
});

test('Should add an additional discount for 7 and more days of rent', () => {
  expect(total(7))
    .toBe(230);
});
