/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RENT = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const standardPrice = days * DAILY_RENT;

  if (days >= LONG_TERM) {
    return standardPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return standardPrice - SHORT_TERM_DISCOUNT;
  }

  return standardPrice;
}

module.exports = calculateRentalCost;
