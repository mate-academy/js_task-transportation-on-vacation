/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TIME = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const DAY_PRICE = 40;

  const basePrice = DAY_PRICE * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TIME) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
