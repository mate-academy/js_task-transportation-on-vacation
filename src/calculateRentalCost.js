/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TIME = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrise = days * PRICE_PER_DAY;

  if (days >= LONG_TIME) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
