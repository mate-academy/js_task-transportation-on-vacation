'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentPrice = 40;

  if (days >= 7) {
    return (days * rentPrice) - 50;
  } else if (days >= 3) {
    return (days * rentPrice) - 20;
  } else {
    return days * rentPrice;
  }
}

module.exports = calculateRentalCost;
