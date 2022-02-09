'use strict';

function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const totalSum = days * price;

  if (days >= 7) {
    return totalSum - bigDiscount;
  }

  if (days >= 3) {
    return totalSum - smallDiscount;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
