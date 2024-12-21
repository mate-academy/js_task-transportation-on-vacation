/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const SHORT_DAY = 3;
  const LONG_DAY = 7;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const PRICE = 40;

  const sum = PRICE * days;

  if (days >= LONG_DAY) {
    return sum - BIG_DISCOUNT;
  }

  if (days >= SHORT_DAY) {
    return sum - SMALL_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
