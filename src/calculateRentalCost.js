'use strict';

function calculateRentalCost(days) {
  const price = 40;
  const totalSum = days * price;

  if (days / 7 >= 1) {
    return totalSum - 50;
  }

  if (days / 3 >= 1) {
    return totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
