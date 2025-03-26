'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_DAYS = 3;
const MEDIUM_TERM_DISCOUNT = 20;

  let result = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    result = result - LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM_DAYS) {
    result = result - MEDIUM_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
