'use strict';

const DAILY_PRICE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;

/**
 * @param {number} numberOfDays
 *
 * @returns {number}
 */
function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * DAILY_PRICE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
