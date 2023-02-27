'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const pricePerDay = 40;
  let sum = days * pricePerDay;

  if (days >= 7) {
    sum -= 50;
  } else if (days >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
