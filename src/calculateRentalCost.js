/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MIN_DAYS_FOR_DISCOUNT = 3;
  const LONG_TERM = 7;
  const PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const DEFAULT_PRICE = days * PRICE;

  if (days >= LONG_TERM) {
    return DEFAULT_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_DISCOUNT) {
    return DEFAULT_PRICE - SHORT_TERM_DISCOUNT;
  }

  return DEFAULT_PRICE;
}

module.exports = calculateRentalCost;
