/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_AFTER_LONG_TERM = 50;
  const DISCOUNT_AFTER_SHORT_TERM = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const totalPrice = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return totalPrice - DISCOUNT_AFTER_LONG_TERM;
  } else if (days >= SHORT_TERM) {
    return totalPrice - DISCOUNT_AFTER_SHORT_TERM;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
