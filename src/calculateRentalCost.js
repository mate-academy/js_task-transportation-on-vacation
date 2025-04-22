/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FOR_DAY = 40;
  const LONG_TERM = 7;
  const DISCOUNT_FOR_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_FOR_SHORT_TERM = 20;

  const totalAmount = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return totalAmount - DISCOUNT_FOR_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return totalAmount - DISCOUNT_FOR_SHORT_TERM;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
