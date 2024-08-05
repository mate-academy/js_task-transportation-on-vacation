'use strict';
/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const SHORT_TERM_RENTAL = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_RENTAL = 7;
  const LONG_TERM_DISCOUNT = 50;
  const rentalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_RENTAL) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return rentalCost - SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
