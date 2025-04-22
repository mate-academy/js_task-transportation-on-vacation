/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_PER_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const result = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return result - SHORT_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
