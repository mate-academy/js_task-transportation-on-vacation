/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const baseAmount = days * AMOUNT_PER_DAY;

  if (days >= LONG_TERM) {
    return baseAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseAmount - SHORT_TERM_DISCOUNT;
  }

  return baseAmount;
}

module.exports = calculateRentalCost;
