/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const baseTotal = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return baseTotal - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseTotal - SHORT_TERM_DISCOUNT;
  }

  return baseTotal;
}

module.exports = calculateRentalCost;
