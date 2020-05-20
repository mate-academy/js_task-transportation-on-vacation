'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let result = 0;

  if (days < 3) {
    result += days * 40;
  } else if (days < 7) {
    result += days * 40 - 20;
  } else if (days <= 7) {
    result += days * 40 - 50;
  } else {
    return days * 40;
  }

  return result;
}

module.exports = calculateRentalCost;
