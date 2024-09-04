/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * PRICE - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE - SHORT_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
