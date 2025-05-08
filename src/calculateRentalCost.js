'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const RENTAL_COST = 40;
  const totalPriceWithoutDiscount = days * RENTAL_COST;

  if (days >= LONG_TERM) {
    return totalPriceWithoutDiscount - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return totalPriceWithoutDiscount - MIDDLE_TERM_DISCOUNT;
  }

  return totalPriceWithoutDiscount;
}

module.exports = calculateRentalCost;
