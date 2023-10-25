'use strict';

/*
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  if (days < 3) {
    return days * 40;
  } else if (days >= 3 && days <= 6) {
    return days * 30;
  } else {
    return days * 20;
  }
}

module.exports = calculateRentalCost;

