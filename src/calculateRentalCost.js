'use strict';

function calculateRentalCost(days) {
  const price = 40;
  const totalSum = days * price;

  if (Math.trunc(days / 7)) {
    return totalSum - 50;
  }

  if (Math.trunc(days / 3)) {
    return totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
