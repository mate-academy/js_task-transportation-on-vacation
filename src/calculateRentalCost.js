'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const TERM = 7;
  const TERM_DISCOUNT = 50;
  const LESS_TERM = 3;
  const LESS_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_DAY;

  if (days >= TERM) {
    return basePrice - TERM_DISCOUNT;
  }

  if (days >= LESS_TERM) {
    return basePrice - LESS_TERM_DISCOUNT;
  }

  return basePrice;
}


module.exports = calculateRentalCost;
