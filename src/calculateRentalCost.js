/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COSTS_DAY = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUT = 50;
  const LONG_TERM = 7;
  const basicPrice = days * CAR_COSTS_DAY;

  if (days >= LONG_TERM) {
    return basicPrice - LONG_TERM_DISCOUT;
  }

  if (days >= SHORT_TERM) {
    return basicPrice - SHORT_TERM_DISCOUNT;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
