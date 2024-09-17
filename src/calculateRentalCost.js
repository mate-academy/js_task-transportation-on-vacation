'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = 40;

  if (days >= LONG_TERM) {
    return (basePrice * days) - LONG_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    return basePrice * days;
  }

  return (basePrice * days) - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
