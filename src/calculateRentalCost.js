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

  const normalPrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return normalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return normalPrice - SHORT_TERM_DISCOUNT;
  }

  return normalPrice;
}

module.exports = calculateRentalCost;
