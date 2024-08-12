/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_RENT = 40;
  const LONG_TEMR = 7;
  const SHORT_TERM = 3;
  const TOTAL_PRICE = days * PRICE_RENT;

  const LONG_TEMR_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TEMR) {
    return TOTAL_PRICE - LONG_TEMR_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
