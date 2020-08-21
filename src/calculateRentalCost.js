'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let sum = days * 40;

  if (days >= 5) {
    sum -= 50;
  } else if (sum >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
