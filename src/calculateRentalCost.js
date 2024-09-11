/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const result = days * DAY_PRICE;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return result - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return result - SHORT_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
