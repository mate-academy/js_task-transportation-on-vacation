'use strict';

const DAILY_PRICE = 40;
const SHORT_TERM_MIN_DAYS = 3;
const LONG_TERM_MIN_DAYS = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const basePrice = days * DAILY_PRICE;

  if (days >= LONG_TERM_MIN_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_MIN_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
