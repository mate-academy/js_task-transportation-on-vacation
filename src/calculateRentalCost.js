/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const defaultPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    return defaultPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return defaultPrice - SHORT_TERM_DISCOUNT;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
