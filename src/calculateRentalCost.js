'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let count = 0;

  for (let d = 1; d <= days; d++) {
    count += 40;
  }

  if (days >= 3) {
    count -= 20;
  }

  if (days >= 7) {
    count -= 30;
  }

  return count;
}

module.exports = calculateRentalCost;
