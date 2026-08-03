/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const PERIOD_PRICE = days * PRICE_PER_DAY;

  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return PERIOD_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PERIOD_PRICE - SHORT_TERM_DISCOUNT;
  }

  return PERIOD_PRICE;
}

module.exports = calculateRentalCost;
