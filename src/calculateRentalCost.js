/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;
  const LONG_TERM_DISCOUNT_DAYS = 7;
  const SHORT_TERM_DISCOUNT_AMOUNT = 20;
  const SHORT_TERM_DISCOUNT_DAYS = 3;

  const sum = days * COST_PER_DAY;

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return sum - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= SHORT_TERM_DISCOUNT_DAYS) {
    return sum - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
