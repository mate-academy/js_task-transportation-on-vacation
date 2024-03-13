/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const LONG_TERM_PERIOD = 7;
  const LONG_TERM_PERIOD_DISCOUNT = 50;
  const SHORT_TERM_PERIOD = 3;
  const SHORT_TERM_PERIOD_DISCOUNT = 20;

  if (days >= LONG_TERM_PERIOD) {
    return price - LONG_TERM_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_TERM_PERIOD) {
    return price - SHORT_TERM_PERIOD_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
