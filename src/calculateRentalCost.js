/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_RENT = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE_WITHOUT_DISCOUNT = days * ONE_DAY_RENT;

  if (days >= LONG_TERM) {
    return PRICE_WITHOUT_DISCOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE_WITHOUT_DISCOUNT - SHORT_TERM_DISCOUNT;
  }

  return PRICE_WITHOUT_DISCOUNT;
}

module.exports = calculateRentalCost;
