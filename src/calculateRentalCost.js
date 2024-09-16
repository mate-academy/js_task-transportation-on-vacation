/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_HOUR = 40;
  const LONG_TERM = 7;
  const DISCOUNT_LONG = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT = 20;

  const totalAmount = PRICE_PER_HOUR * days;

  if (days >= LONG_TERM) {
    return totalAmount - DISCOUNT_LONG;
  }

  if (days >= SHORT_TERM) {
    return totalAmount - DISCOUNT_SHORT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
