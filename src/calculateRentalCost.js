/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DFY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM__DISCOUNT = 20;

  const basePrise = days * PRICE_PER_DFY;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM__DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
