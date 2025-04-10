/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basedPrice = days * 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONF_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return basedPrice;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basedPrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basedPrice - LONF_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
