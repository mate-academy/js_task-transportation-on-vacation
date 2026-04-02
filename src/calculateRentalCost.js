'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const totalPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
