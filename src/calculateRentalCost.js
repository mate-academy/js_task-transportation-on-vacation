'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const basicDiscount = 20;
  const proDiscount = 50;
  const totalSum = days * 40;

  if (days >= 7) {
    return totalSum - proDiscount;
  }

  if (days >= 3) {
    return totalSum - basicDiscount;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
