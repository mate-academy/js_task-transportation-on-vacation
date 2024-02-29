/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  const basePrise = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
