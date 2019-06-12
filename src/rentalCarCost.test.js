'use strict';

const total = require('./rentalCarCost');

test(`Do not add any discount for less than 3 days`, () => {
  expect(total(2))
    .toBe(80);
});

test('Should add the discount for 3 and more days of rent', () => {
  expect(total(4))
    .toBe(140);
});

test('Should add an additional discount for more than 7 days of rent', () => {
  expect(total(10))
    .toBe(350);
});
