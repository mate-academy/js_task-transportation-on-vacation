/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const basedPrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basedPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basedPrice - SHORT_TERM_DISCOUNT;
  }

  return basedPrice;
}

module.exports = calculateRentalCost;
