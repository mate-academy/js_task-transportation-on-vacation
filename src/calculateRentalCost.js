'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let result = 0;
  const costPerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    result += days * costPerDay;
  }

  if (days >= 3 && days < 7) {
    result += days * costPerDay - smallDiscount;
  }

  if (days >= 7) {
    result += days * costPerDay - bigDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
