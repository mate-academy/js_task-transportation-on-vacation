/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basedPrice = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return basedPrice * days;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basedPrice * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basedPrice * days - LONG_TERM_DISCOUNT;
  }

  return basedPrice;
}

module.exports = calculateRentalCost;
