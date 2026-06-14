/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const DAY_PRICE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * DAY_PRICE - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAY_PRICE - SMALL_DISCOUNT;
  }

  return days * DAY_PRICE;
}

module.exports = calculateRentalCost;
