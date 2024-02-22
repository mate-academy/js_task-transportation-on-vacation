'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const DISCOUNT_FOR_7_DAYS = 50;
  const DISCOUNT_FOR_3_DAYS = 20;
  const totalSpend = days * 40;

  if (days >= LONG_TERM_DAYS) {
    return totalSpend - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= SHORT_TERM_DAYS) {
    return totalSpend - DISCOUNT_FOR_3_DAYS;
  }

  return totalSpend;
}

module.exports = calculateRentalCost;
