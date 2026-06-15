const calculateRentalCost = require('../src/calculateRentalCost');

test('1 day', () => {
  expect(calculateRentalCost(1)).toBe(40);
});

test('3 days', () => {
  expect(calculateRentalCost(3)).toBe(100);
});

test('7 days', () => {
  expect(calculateRentalCost(7)).toBe(230);
});