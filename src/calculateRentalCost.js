/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const TOTAL_PRICE = PRICE_PER_DAY * days;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return TOTAL_PRICE;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
