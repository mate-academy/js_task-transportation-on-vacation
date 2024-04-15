/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

function calculateRentalCost(days) {
  const basePrice = days * 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }
  if (days < LONG_TERM && days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }
  if (days < SHORT_TERM) {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
