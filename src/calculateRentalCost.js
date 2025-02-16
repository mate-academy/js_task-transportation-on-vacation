/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basedPrice = days * DAILY_RENT;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basedPrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basedPrice - LONG_TERM_DISCOUNT;
  }

  return basedPrice;
}

module.exports = calculateRentalCost;
