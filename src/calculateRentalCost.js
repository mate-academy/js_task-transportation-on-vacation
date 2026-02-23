'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_FEE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let price = days * DAILY_FEE;

  if (days >= LONG_TERM) {
    return (price -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (price -= SHORT_TERM_DISCOUNT);
  }

  return price;
}

module.exports = calculateRentalCost;
