/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const BASIC_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return BASIC_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BASIC_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASIC_PRICE;
}

module.exports = calculateRentalCost;
