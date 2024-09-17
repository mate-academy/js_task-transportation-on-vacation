/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COSTS_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const DISCOUNT_SHORT_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;

  const totalPrice = days * COSTS_PER_DAY;

  if (days >= LONG_TERM) {
    return totalPrice - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - DISCOUNT_SHORT_TERM;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
