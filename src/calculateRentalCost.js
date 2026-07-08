'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

/* eslint-disable prettier/prettier */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;

  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
