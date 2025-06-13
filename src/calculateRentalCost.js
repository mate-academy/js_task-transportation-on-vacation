'use strict';
/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERMS = 3;
  const LONG_TERMS = 7;
  const SHORT_TERMS_DISCOUNT = 20;
  const LONG_TERMS_DISCOUNT = 50;

  const price = days * PRICE_PER_DAY;

  if (days >= LONG_TERMS) {
    return price - LONG_TERMS_DISCOUNT;
  }

  if (days >= SHORT_TERMS) {
    return price - SHORT_TERMS_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
