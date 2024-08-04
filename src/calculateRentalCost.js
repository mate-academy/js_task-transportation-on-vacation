'use strict';
/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const rentalCost = days * DAILY_RENTAL_COST;

  if (days >= 7) {
    return rentalCost - 50;
  }

  if (days >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
