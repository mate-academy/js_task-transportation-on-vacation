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

  const baseRentalCost = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return baseRentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseRentalCost - SHORT_TERM_DISCOUNT;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
