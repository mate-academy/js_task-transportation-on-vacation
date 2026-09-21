/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE_PER_DAY = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_THRESHOLD = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const cost = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM_THRESHOLD) {
    return cost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return cost - SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
