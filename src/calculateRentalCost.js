'use strict';

function calculateRentalCost(days) {
  const dailyRent = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const total = dailyRent * days;

  if (days >= 7) {
    return total - bigDiscount;
  } else if (days >= 3) {
    return total - smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
