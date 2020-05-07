'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  let total = 0;

  for (let i = 1; i <= days; i += 1) {
    total += 40;
  }

  if (days >= 3) {
    total -= 20;
  }

  if (days >= 7) {
    total -= 30;
  }

  return total;
}

module.exports = calculateRentalCost;
