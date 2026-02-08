'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const CAR_DAILY_RATE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return CAR_DAILY_RATE * days;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return CAR_DAILY_RATE * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return CAR_DAILY_RATE * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
