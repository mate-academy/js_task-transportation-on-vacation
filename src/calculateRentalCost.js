/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const baseTotalPrice = PRICE_PER_DAY * days;

  if (days < SHORT_TERM) {
    return baseTotalPrice;
  }

  if (days < LONG_TERM) {
    return baseTotalPrice - SHORT_TERM_DISCOUNT;
  }

  return baseTotalPrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
