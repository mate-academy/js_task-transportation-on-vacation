'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let result;

  if (days < 3) {
    result = days * 40;
  } else if (days >= 3 && days < 7) {
    result = (days * 40) - 20;
  } else if (days >= 7) {
    result = (days * 40) - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
