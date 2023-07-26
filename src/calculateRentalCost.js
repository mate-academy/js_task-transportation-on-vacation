'use strict';

function calculateRentalCost(days) {
  const dailyCost = 40;
  const discountForWeek = 50;
  const discountForThreeDays = 20;

  let total = days * dailyCost;

  if (days >= 7) {
    total -= discountForWeek;

    return total;
  }

  if (days >= 3) {
    total -= discountForThreeDays;

    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
