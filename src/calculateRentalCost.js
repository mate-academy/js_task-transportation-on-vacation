/* eslint-disable no-const-assign */
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;

  const PRICE = days * PRICE_DAY;

  if (days >= LONG_TERM) {
    return PRICE - LONG_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return PRICE - SHORT_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
