'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyRent = 40;
  const longDays = 7;
  const longDiscount = 50;
  const mediumDays = 3;
  const mediumDiscount = 20;

  const totalCost = days * dailyRent;

  if (days >= longDays) {
    return totalCost - longDiscount;
  }

  if (days >= mediumDays) {
    return totalCost - mediumDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
