'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;

  const shortTermDiscount = 20;

  const longTetmDiscount = 50;

  let totalCost = 0;

  if (days < 3) {
    totalCost = days * dailyRate;
  }

  if (days >= 3) {
    totalCost = days * dailyRate - shortTermDiscount;
  }

  if (days >= 7) {
    totalCost = days * dailyRate - longTetmDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
